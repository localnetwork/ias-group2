import Head from "next/head";

export default function Seo({ ...props }) {
  const { meta_title, meta_description } = props;
  console.log("eeeee");
  const metaImgUrl = "https://ias-group2.pages.dev/images/og-image.png";
  return (
    <>
      <Head>
        <title>{meta_title || "Group 2 - IAS"}</title>
        <meta name="image" property="og:image" content={metaImgUrl} />
        <meta
          name="secure_url"
          property="og:image:secure_url"
          content={metaImgUrl}
        />
        <meta name="twitter:image" content={metaImgUrl} />

        <meta name="og:image:width" content="1200" />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  );
}
