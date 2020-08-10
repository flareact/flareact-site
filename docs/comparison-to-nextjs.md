# Comparison to Next.js

Flareact is modeled closely after [Next.js](https://nextjs.org). Here are a few key differences:

- Next.js emphasizes static generation, while Flareact leverages edge-computing + caching.
- Next.js has lots of optimizations built in, and it's considered more "production ready"
- Lots of other things 😊

## Rendering Modes

Next.js offers three distinct ways to render your pages:

- **Static-Site Generation (SSG)**: Your pages are generated at deploy time with `getStaticProps`. They are optionally revalidated on a timed basis to support **incremental re-generation** of your pages (useful for e.g. pulling in your latest blog posts).
- **Server-Side Rendering (SSR)**: Your pages are generated on-demand with each request with `getServerProps`. This is less common, given the powerful tool of incremental SSG above.
- **Client-Side Rendering (CSR)**: If you don't need to have your data fetched as part of your initial HTML payload, you can fetch it within your component as a typical AJAX request.

Flareact offers a similar approach:

- **Edge-Side Rendering (ESR)**: Your pages are generated on-demand with each request with `getEdgeProps`. Optionally, the pages can be cached at the edge using the [Cloudflare Worker Cache](https://developers.cloudflare.com/workers/reference/apis/cache/)<sup>\*</sup>, essentially being served as statically-generated pages. They can also be revalidated on a timed basis<sup>\*</sup>, behaving similarly to incremental SSG.
- **Client-Side Rendering (CSR)**: If you don't need to have your data fetched as part of your initial HTML payload, you can fetch it within your component as a typical AJAX request.

<sup>\*</sup>_Coming soon_
