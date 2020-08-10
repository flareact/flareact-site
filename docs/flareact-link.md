# flareact/link

To perform client-side routing between different pages of your Flareact app, use the `flareact/link` component:

```js
import Link from "flareact/link";

export default function Index() {
  return (
    <div>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```

`<Link>` accepts a single child element. If you provide an `<a>` tag, it will automatically apply the `href` at render time.
