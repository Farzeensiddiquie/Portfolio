export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://farzeensportfolio.vercel.app/sitemap.xml",
  };
}
