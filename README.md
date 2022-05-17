# Onlygreen

Onlygreen is the codename for the new reinhart1010.id frontend specifically designed for ["evergreen" browsers](https://www.adam-bien.com/roller/abien/entry/what_is_an_evergreen_browser), which are web browsers who updates their features in a short, regular basis. So yeah, no Internet Explorer and good old versions of Opera Mini are allowed here.

This new site uses cutting-edge HTML and CSS features which are only found in recent versions of evergreen browsers. We aim to officially support browsers [down to the third latest versions of **Firefox ESR (Extended Support Release)**](https://wiki.mozilla.org/Release_Management/Calendar), which are special versions of Firefox made for enterprise deployments with long-term official support (also known as LTS). Our original site will still be able to be visited with other unsupported web browsers, such as those found in smart TVs and who knows, [The oldest actively maintained web browser which is definitely not Firefox/Netscape!](https://lynx.invisible-island.net/)

## Differences

| Features and features used | Current reinhart1010.id site | Onlygreen |
|---|---|---|
| Light/dark theme toggle | ❌ (Dark mode by default) | ✅ |
| [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) ([Supported browsers](https://caniuse.com/css-grid)) | ❌ | ✅ |

## Development

This project utilizes [Remix](https://remix.run) which is then deployed through [Cloudflare Pages](https://pages.cloudflare.com/), however the overall site still depends on our original WordPress instance through the [REST APIs](https://developer.wordpress.org/rest-api/), similar to the [Frontity](https://frontity.org/) way.

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.
