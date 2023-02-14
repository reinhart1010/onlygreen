import { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import MainLayout from "~/layouts/main";
import Post from "~/models/post";
import ContentContainer from "~/components/contentContainer";

export const loader: LoaderFunction = async ({ context, params, request }) => {
  try {
    const fetchResult = await fetch(`https://blogarchive.reinhart1010.id/wp-json/wp/v2/posts?slug=${params.slug!}&_embed`);
    if (fetchResult.status == 404) throw new Response("Not Found", {
      status: 404
    });
    const [post] = (await fetchResult.json()) as [any];
    console.log(`https://blogarchive.reinhart1010.id/wp-json/wp/v2/posts?slug=${params.slug!}&_embed`);
    let res: Post = {
      type: "wordpress",
      content: post.content.rendered,
      summary: post.excerpt.rendered,
      title: post.title.rendered
    };

    if (post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"].length > 0) {
      const sizes = post._embedded["wp:featuredmedia"][0].media_details.sizes;
      res.coverImage = sizes.full.source_url;
      let coverImageSrcSet: Array<[string, string]> = [];
      const keys = Object.keys(sizes);
      let i;
      for (i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key == "thumbnail" || key.includes("profile")) continue;
        coverImageSrcSet.push([sizes[key].source_url, sizes[key].width + "w"]);
      }
      res.coverImageSrcSet = coverImageSrcSet;
    };
    if (!res.coverImage && post.jetpack_featured_media_url) res.coverImage = post.jetpack_featured_media_url;
    return res;
  } catch (e) {
    console.error(e);
    throw new Response("Internal Server Error", {
      status: 500
    });
  }
}

export default function BlogDetailsPage() {
  const params = useLoaderData();

  return <MainLayout hero={{
    title: params.title,
    coverImage: params.coverImage,
    coverImageSrcSet: params.coverImageSrcSet
  }}>
    <div className="h-entry">
      <h1 className="hidden p-name">{params.title}</h1>
      <p className="hidden p-summary">{params.summary}</p>
      <ContentContainer>
        <div dangerouslySetInnerHTML={{ __html: params.content }} className="p-content"/>
      </ContentContainer>
    </div>
  </MainLayout>;
}
