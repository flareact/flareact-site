# Data Fetching

Flareact allows you to fetch data for page components. This happens in in your Cloudflare Worker on the edge, using `getEdgeProps`.

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

A couple things to note about `getEdgeProps`:

- The code you write will **always run on the edge** in a Worker context. This means it will _never_ run client-side in the browser.
- In a worker context, **you DO NOT have access to the filesystem**. This means anything that references the Node.js `fs` module will throw errors.
- You can only define `getEdgeProps` for page components living in your `/pages` directory - not for any other components living elsewhere.
- Transitioning from Next.js? `getStaticProps` is aliased to `getEdgeProps`, so you don't need to make any changes!

_Coming soon: Caching using the Cloudflare Cache API and revalidation options._
