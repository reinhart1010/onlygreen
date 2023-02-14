import { useEffect, useRef } from 'react';
import { BalloonHeart, ClockHistory, CodeSlash, Globe2, Grid3x3GapFill, HeadsetVr, Joystick, Stars, Toggles } from 'react-bootstrap-icons';

import ContentContainer from '~/components/contentContainer';
import Tabs from '~/components/tabs';
import MainLayout from '~/layouts/main';

interface AnakITAbility {
  name: string,
  url: string,
}

interface Choice {
  name: string
}

export default function Index() {
  const anakITTitle = 'Lu kan Anak IT, masa ga ';
  const anakITAbilityRef = useRef<HTMLAnchorElement>(null);
  const anakITTitleRef = useRef<HTMLSpanElement>(null);
  const anakITQuestionMarkRef = useRef<HTMLSpanElement>(null);
  const textCursorRef = useRef<HTMLSpanElement>(null);

  const phrases: Array<AnakITAbility> = [
    {
      name: 'bantu orang lain report penipuan olshop',
      url: 'https://rootverse.reinhart1010.id/security-intelligence/modigirlss-scam'
    },
    {
      name: 'bisa bikin alt account',
      url: 'https://twitter.com/alterine0101'
    },
    {
      name: 'bisa bikin aplikasi baca berita',
      url: 'https://binustoday.reinhart1010.id'
    },
    {
      name: 'bisa bikin aplikasi media sosial',
      url: 'https://play.google.com/store/apps/developer?id=Kenangan.com'
    },
    {
      name: 'bisa bikin game sendiri',
      url: 'https://reinhart1010.github.io/jackpotgbk/'
    },
    {
      name: 'bisa ngereview metaverse artis',
      url: 'https://reinhart1010.id/blog/2022/02/26/review-teknikal-leslar-metaverse/'
    },
    {
      name: 'bisa nyelametin diri dari Thanos pake JavaScript',
      url: 'https://qr.ae/pvAS15'
    },
    {
      name: 'bisa pakai Git',
      url: 'https://reinhart1010.github.io/posts/2019/09/05/cara-pakai-git-dan-github-gais.html'
    },
    {
      name: 'bisa survive dari kejamnya StackOverflow',
      url: 'https://stackoverflow.com/users/3671760/reinhart-previano'
    },
    {
      name: 'difollow sama @codingfess',
      url: 'https://twitter.com/codingfess'
    },
    {
      name: 'jawab pertanyaan orang lain di Kotakode',
      url: 'https://kotakode.com/users/7'
    },
    {
      name: 'naruh project di GitHub',
      url: 'https://github.com/reinhart1010'
    },
    {
      name: 'ngoprek OpenWrt',
      url: 'https://reinhart1010.github.io/posts/2021/02/14/apparently-yes-you-can-install-openjdk-java-jre-and-yacy-on-openwrt.html'
    },
    {
      name: 'pakai Let\'s Encrypt',
      url: 'https://www.ssllabs.com/ssltest/analyze.html?d=reinhart1010.id&latest'
    },
    {
      name: 'pakai Windows, macOS, dan Linux secara bersamaan',
      url: 'https://twitter.com/alterine0101/status/1495812351664209924?s=20&t=wGynevOxEqRDoXocm7AL2A'
    },
    {
      name: 'punya akun GitLab',
      url: 'https://gitlab.com/reinhart1010'
    },
    {
      name: 'punya akun Gitee',
      url: 'https://gitee.com/reinhart1010'
    },
    {
      name: 'hijrah dari Twitter untuk bikin server medsos sendiri',
      url: 'https://bots.reinhart1010.id/@reinhart'
    },
    {
      name: 'punya blog pribadi',
      url: 'https://reinhart1010.id/blog'
    },
    {
      name: 'main Competitive Programming',
      url: 'https://www.beecrowd.com.br/judge/en/profile/481130'
    },
    {
      name: 'nongkrong di Terminal',
      url: 'https://reinhart1010.github.io/posts/2019/09/05/cara-pakai-git-dan-github-gais.html'
    },
    {
      name: 'nongkrong di Tech Twitter Indonesia',
      url: 'https://twitter.com/i/communities/1496792130039152640'
    },
    {
      name: 'nyadar kalau about:blank itu website tercepat in every universe',
      url: 'https://qr.ae/pvAS4Z'
    },
    {
      name: 'nyadar kalau literally semua anak muda di Indonesia itu hacker',
      url: 'https://twitter.com/alterine0101/status/1525910499577438209?s=20&t=wGynevOxEqRDoXocm7AL2A'
    },
    {
      name: 'tau bedanya ngembangin website vs aplikasi Android',
      url: 'https://qr.ae/pvAS4e'
    },
    {
      name: 'tau cara benerin tampilan emoji Windows di website',
      url: 'https://stackoverflow.com/questions/70923715/prevent-segoe-ui-emoji-font-to-be-bucket-filled-under-font-weight-bold-in-goo/70923716#70923716'
    },
    {
      name: 'tau cara paling ampuh buat nyelesaiin Git merge conflict',
      url: 'https://kotakode.com/pertanyaan/707/Cara-paling-efektif-untuk-resolve-merge-conflicts'
    },
    {
      name: 'tau kalau kasir Transmart Carrefour terciduk pakai desktop Linux',
      url: 'https://qr.ae/pvAS8J'
    },
    {
      name: 'tau kenapa kodingan ini kerja di Firefox tapi error di Google Chrome',
      url: 'https://stackoverflow.com/questions/70554511/js-does-not-work-in-google-chrome-and-it-only-works-on-firefox/70554684#70554684'
    },
    {
      name: 'tau siapa yang beneran punya Android',
      url: 'https://qr.ae/pNBhhr'
    },
    {
      name: 'tau tujuan hidup dari System32',
      url: 'https://qr.ae/pvAS1d'
    },
  ];

  let characterCount = 0, chosenPhrase = 0;

  function updateCharacterCount(increment = true) {
    const combinedSentence = `${anakITTitle}${phrases[chosenPhrase].name}?`

    if (increment && characterCount >= combinedSentence.length){
      return;
    } else if (!increment && characterCount < -1) {
      characterCount = 0;
      return;
    }

    anakITTitleRef.current!.textContent = anakITTitle.substring(0, characterCount);
    anakITAbilityRef.current!.textContent = phrases[chosenPhrase].name.substring(0, characterCount - anakITTitle.length);
    anakITQuestionMarkRef.current!.style.display = characterCount == combinedSentence.length - 1 ? 'inline' : 'none';

    let longer = ['.', ',', '?'].includes(combinedSentence.charAt(characterCount - 2));
    if (increment) characterCount++;
    else if (!increment && characterCount >= anakITTitle.length) characterCount--;

    if (!increment && characterCount < anakITTitle.length) {
      chosenPhrase = Math.floor(Math.random() * phrases.length);
    anakITAbilityRef.current!.href = phrases[chosenPhrase].url;
      characterCount++;
      setTimeout(updateCharacterCount, 2000, true);
    } else if (increment && combinedSentence.length > anakITTitle.length && characterCount >= combinedSentence.length) {
      setTimeout(updateCharacterCount, 5000, false, true);
    } else {
      setTimeout(updateCharacterCount, increment ? (longer ? 2000 : 150) : 50, increment);
    }
  }

  useEffect(() => {
    let hideCursor = false;
    setInterval(() => {
      hideCursor = !hideCursor;
      textCursorRef.current!.style.visibility = hideCursor ? 'hidden' : 'visible';
    }, 400);

    const old = chosenPhrase
    do {
      chosenPhrase += Math.floor(Math.random() * phrases.length);
      chosenPhrase %= phrases.length;
      anakITAbilityRef.current!.href = phrases[chosenPhrase].url;
    } while (phrases.length < 2 && old == chosenPhrase)
    updateCharacterCount();
  });

  return (
    <MainLayout hero={{
      'children': (
        <h1 className="font-serif leading-none sm:leading-tight text-center text-4xl sm:text-5xl lg:text-6xl md:tracking-tight w-full">
          <span ref={anakITTitleRef} />
          <a className="underline" ref={anakITAbilityRef} target="_blank" />
          <span ref={anakITQuestionMarkRef}>?</span>
          <span ref={textCursorRef}>|</span>
        </h1>
      )
    }}>
      <ContentContainer forceFull={true} noPadding={true}>
        {/* <Tabs items={[
          {
            id: 'about',
            child: (<p>Tentang</p>)
          },
          {
            id: 'blogs',
            child: (<p>Berita</p>)
          },
          {
            id: 'projects',
            child: (<p>Proyek</p>)
          }
        ]}/> */}
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:w-2/3 xl:w-5/6">
            <h2 className="font-serif text-3xl lg:text-4xl">Halo, saya <span className="font-bold">Reinhart</span>, <span className="font-bold">seorang manusia</span> yang hidup di <span className="font-bold">Jakarta</span> dan suka bereksperimen dan membangun hal-hal baru.</h2>
            <p className="mt-4"><b>Transformasi digital</b> yang semakin digencarkan di tengah-tengah masyarakat telah menuntut saya untuk bertransformasi menjadi pribadi yang digital.</p>
            <p className="mt-4">Saya kini berevolusi menjadi <b>amalgam digital</b> yang sering menjelajahi berbagai dunia, nyata dan maya. Dengan logam biru yang melekat di dalam tubuh saya, <a className="underline" href="https://reinhart1010.id/blog/2022/02/25/im-nate-the-blue-command-line-guy/" target="_blank">saya telah menjadi ikon dalam dunia per-<i>command-line</i>-an</a>.</p>
            <h3 className="font-serif mt-6 text-2xl lg:text-3xl xl:text-4xl">Pengaturan Semesta</h3>
            <Tabs center={false} className="mt-4" items={[
              {
                id: 'about',
                child: (<p><Globe2 aria-hidden={true} className="inline mr-2" />Default</p>)
              },
              {
                id: 'blogs',
                child: (<p><Toggles aria-hidden={true} className="inline mr-2" />Big Tech</p>)
              },
              {
                id: 'projects',
                child: (<p><HeadsetVr aria-hidden={true} className="inline mr-2" />Cyberpunk</p>)
              },
              {
                id: 'projects',
                child: (<p><BalloonHeart aria-hidden={true} className="inline mr-2" />Neumorphism</p>)
              },
              {
                id: 'projects',
                child: (<p><Joystick aria-hidden={true} className="inline mr-2" />Retro</p>)
              }
            ]}/>
          </div>
          <picture>
            <source srcSet="/img/nate-dark.webp" type="image/webp" media="(prefers-color-scheme: dark)" />
            <source srcSet="/img/nate-dark.png" type="image/png" media="(prefers-color-scheme: dark)" />
            <source srcSet="/img/nate.webp" type="image/webp" />
            <source srcSet="/img/nate.png" type="image/png" />
            <img height={1280} src="img/nate.png" width={685} />
          </picture>
        </div>
      </ContentContainer>
      <ContentContainer className="bg-sky-600 py-12 text-white">
        <p className="text-7xl md:text-8xl">:(</p>
        <h2 className="font-light mt-8 text-2xl md:text-3xl">Ekspektasi Anda tentang seorang Anak IT kini sedang mengalami <span className="font-semibold">masalah yang cukup serius</span>. Anda perlu untuk istirahat sambil baca berita yang cukup untuk memperbaikinya.</h2>
        <p className="font-light mt-8 text-2xl md:text-3xl">Berkat tuntutan masyarakat, saya berhasil bertransformasi diri menjadi <span className="font-semibold">orang pertama</span> di Indonesia yang layak disebut sebagai <span className="font-semibold">Anak IT</span>.</p>
        <Tabs center={false} className="mt-8" items={[
          {
            id: 'projects',
            child: (<p><Grid3x3GapFill aria-hidden={true} className="inline mr-2" />Proyek &amp; Aplikasi</p>)
          },
          {
            id: 'experiences',
            child: (<p><ClockHistory aria-hidden={true} className="inline mr-2" />Pengalaman</p>)
          },
          {
            id: 'vs-kima',
            child: (<p><Stars aria-hidden={true} className="inline mr-2" />vs PT. Kawasan Industri Makassar (Persero)</p>)
          },
          {
            id: 'vs-bsg',
            child: (<p><Stars aria-hidden={true} className="inline mr-2" />vs PT. Bank Pembangunan Daerah Sulawesi Utara Gorontalo</p>)
          },
          {
            id: 'vs-tep',
            child: (<p><Stars aria-hidden={true} className="inline mr-2" />vs PT. Taraindo Energi Perkasa</p>)
          },
        ]}/>
      </ContentContainer>
    </MainLayout>
  );
}
