# Data Fetching

Flareact allows you to fetch data for page components. This happens in in your Cloudflare Worker on the edge, using `getEdgeProps`.

By default, **all edge props are cached** for the lifetime of your current deployment revision, but you can change that behavior using the `revalidate` property.

## Fetching Data using `getEdgeProps`

To define props for your component, export an asynchronous `getEdgeProps` function from your React component:

```js
export async function getEdgeProps() {
  const posts = await getBlogPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>...</li>;
        })}
      </ul>
    </div>
  );
}
```

`getEdgeProps` receives one argument object containing the following properties:

- `params`: Any params corresponding to dynamic routes

You must return an object from `getEdgeProps`:

- it should contain a `props` property containing the props to be passed to your component
- You can optionally pass a `revalidate` argument - see below.

## Caching and Revalidation

Flareact caches all pages and props at the edge using the [Worker Cache API](https://developers.cloudflare.com/workers/reference/apis/cache/). This benefits you because:

- After the first page view, every single page request will be served statically from the edge, making the response even faster 🔥
- You can fetch data from external APIs and headless CMS endpoints without having to worry about scale or load
- One less point of failure, in case an external data API goes down for maintenance, etc.

However, you might want to fetch a fresh set of data from `getEdgeProps` occasionally. This is where the `revalidate` property comes in. Pass a number to `revalidate` to tell Flareact to cache this page for `N` number of seconds:

```js
export async function getEdgeProps() {
  const data = await someExpensiveDataRequest();

  return {
    props: {
      data,
    },
    // Revalidate these props once every 60 seconds
    revalidate: 60,
  };
}
```

There might be times when you **never want the page to be cached**. That's possible, too — just return `{ revalidate: 0 }` from `getEdgeProps` to tell Flareact to fetch a fresh page every single request.

To recap:

| `revalidate` value | Cache Behavior                                     |
| ------------------ | -------------------------------------------------- |
| (none)             | Cache until next deploy                            |
| `0`                | Never cache                                        |
| `1` (or greater)   | Cache that number of seconds, and then revalidate. |

**Note**: In development, props are requested each page load, and no caching is performed.

## Additional Notes

A couple things to note about `getEdgeProps`:

- The code you write will **always run on the edge** in a Worker context. This means it will _never_ run client-side in the browser.
- In a worker context, **you DO NOT have access to the filesystem**. This means anything that references the Node.js `fs` module will throw errors.
- You can only define `getEdgeProps` for page components living in your `/pages` directory - not for any other components living elsewhere.
- Transitioning from Next.js? `getStaticProps` is aliased to `getEdgeProps`, so you don't need to make any changes!
