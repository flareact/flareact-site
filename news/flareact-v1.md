---
date: "2020-12-12T16:37:53.438Z"
title: Flareact v1.0
excerpt: Flareact v1.0 is here with TypeScript support, Sass and CSS Modules support out-of-the-box, caching improvements, and more.
image: "/images/flareact-v1.jpg"
---

Flareact v1.0 has been [released](https://github.com/flareact/flareact/releases/tag/v1.0.0)! We've come a long way since Flareact was introduced as an experimental project in August 2020.

This release includes:

- [TypeScript Support](#typescript-support)
- [Support for Sass styling out of the box](#support-for-sass-styling-out-of-the-box)
- [Support for CSS Modules out of the box](#support-for-css-modules-out-of-the-box)
- [Composable `_document` component for more styling options](#composable-code-_document-code-component-for-more-styling-options)
- [Caching fixes and improvements](#caching-fixes-and-improvements)
- [Navigation anchor link improvements](#navigation-anchor-link-improvements)
- [Upgrade to the latest PostCSS](#upgrade-to-the-latest-postcss)

You can upgrade existing projects right away:

```bash
yarn add flareact react react-dom
```

## TypeScript Support

TypeScript support is here!

Starting today, you can use TypeScript with Flareact. All you need to do is install `typescript` as a dependency:

```bash
yarn add typescript
```

Then you can write your React components using TypeScript. Types FTW:

```tsx
type IndexProps = {
  message: string;
};

export async function getEdgeProps() {
  return {
    props: {
      message: "Hello",
    } as IndexProps,
  };
}

export default function Index({ message }: IndexProps) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
```

Read more about [TypeScript in the docs](/docs/typescript).

## Support for Sass styling out of the box

A lot of people use Sass. Previously, if you wanted to use Sass with a Flareact app, you had to add a [custom Webpack config](/docs/custom-webpack-config) in `flareact.config.js` and install a `sass-loader`.

No more! You can now write `.scss` files in you Flareact app with zero additional config or dependencies.

```scss
// styles/app.scss

.hello {
  .world {
    content: "hi";
  }
}
```

```js
// pages/_app.js
import "../styles/app.scss";
```

## Support for CSS Modules out of the box

A lot of folks like to use [CSS Modules](https://github.com/css-modules/css-modules) to scope their styles to specific components. That's pretty neat, so we've supported that out of the box in Flareact, too.

To get started, add a stylesheet as a sibling to your component, like `components/Alert.module.css` (or `scss`):

```css
.text {
  font-weight: bold;
}
```

Then, import the CSS object into your component and apply it as a class:

```js
import styles from "./Alert.module.css";

export default function Alert() {
  return <p className={styles.paragraph}>Alert!</p>;
}
```

[Read more in the docs](/docs/built-in-css-support).

## Composable `_document` component for more styling options

Prior to Flareact v1, it was impossible to customize the edge-rendered HTML document shell. While you could [customize the `_app` component](/docs/custom-app-page), you weren't able to customize a `_document` component in order to support, for example, some CSS-in-JS libraries.

Starting now, you can provide your own `pages/_document.js` component!

```js
import Document, { Html, Head, Main, FlareactScript } from "flareact/document";

class MyDocument extends Document {
  static async getEdgeProps(ctx) {
    const props = await Document.getEdgeProps(ctx);
    return { ...props };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <FlareactScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

This means CSS-in-JS libraries like [styled-components](https://styled-components.com/) are supported in Flareact! Check out the [`with-styled-components` example](https://github.com/flareact/flareact/tree/canary/examples/with-styled-components) for more.

[Learn how to create a custom `_document` page](/docs/custom-document-page).

**BREAKING CHANGE**: Flareact no longer includes `lang="en"` on the HTML document. Yeah, it was kind of silly to include that before. You can add your own `lang` attribute inside a custom `pages/_document.js`.

## Caching fixes and improvements

There were some nasty bugs with regards to caching in Flareact:

- The `build-manifest.js` file was being cached forever and never cleared for new deploys
- Any compiled CSS files were being cached forever and never cleared for new deploys

This has been fixed 😍 you can now expect your site to load with nice, fresh styles each time you deploy.

## Navigation anchor link improvements

Did you know Flareact didn't support navigation anchors prior to v1? 🙀 Me neither.

Now it does... but wait, there's more!

When you click on a Flareact `<Link>` component, your page will be scrolled to the top (unless it has an anchor `#hash`, of course). _This probably seems like a basic expectation for a modern SPA — sorry it wasn't working before!_

## Upgrade to the latest PostCSS

Flareact now uses PostCSS v8 under the hood. This means it's compatible with TailwindCSS v2. I'm not sure if this breaks anything, but you've been warned.

---

Thanks to `@christian-schlab`, `@SparklingFun`, `@cj`, and anyone else who contributed to this release!

There's a lot more to come in future releases 🤠 stay tuned!
