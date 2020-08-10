# useRouter

Flareact provides access to the `router` instance using the `useRouter()` hook:

```js
import { useRouter } from "flareact";

export default function Index() {
  const router = useRouter();

  // Inspect the pathname
  router.pathname;

  // Navigate to the /about page
  router.push("/about");
}
```
