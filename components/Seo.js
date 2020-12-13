import { useRouter } from "flareact/router";
import Head from "flareact/head";

export function Seo({ title, description, image }) {
  const router = useRouter();

  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
          <meta name="og:title" content={title} />
        </Head>
      )}
      {description && (
        <Head>
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />
        </Head>
      )}
      {image && (
        <Head>
          <meta name="image" property="og:image" content={image} />
          <meta name="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </Head>
      )}
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jplhomer" />
        <meta name="twitter:creator" content="@jplhomer" />
        <meta
          property="og:url"
          content={`https://flareact.com${router.pathname}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Flareact" />
      </Head>
    </>
  );
}
