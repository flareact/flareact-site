# Deployment

To deploy your Flareact site to Cloudflare, run:

```bash
yarn deploy
```

Behind the scenes, Flareact bundles your client assets in a production-ready format and then runs `wrangler publish`.

## Deploying to a custom route

In your `wrangler.toml` file, you can use specify a route for your site instead of the `workers_dev` default host.

To set a route, change `workers_dev = false` and specify your route:

```toml
workers_dev = false
route = "flareact.com/*"
```

At this point, you'll also be required to include a `zone_id`. If you don't want to include this in your version control (e.g. your project is open-source), you can define it in a local `.env` file which is ignored by Git:

```
CF_ZONE_ID=<your zone ID>
CF_ACCOUNT_ID=<your account ID>
```
