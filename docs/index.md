# Flareact

Flareact is an **edge-side rendered** React library built for [Cloudflare Workers](https://workers.cloudflare.com/).

It features **file-based page routing** with dynamic page paths and **edge-side data fetching** APIs.

Flareact is modeled after the terrific [Next.js](https://nextjs.org/) project and its APIs. If you're transitioning from Next.js, a lot of the APIs will seem familiar, _if not identical_!

## Overview

Flareact will serve each file in the `/pages` directory under a pathname matching the filename.

For example, the following component at `/pages/about.js`:

```js
export default function About() {
  return <h1>Who we are</h1>;
}
```

The above page will be served at `site.com/about`.

Next step: Read the [getting started guide](/docs/getting-started).
