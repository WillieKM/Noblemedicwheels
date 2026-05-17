export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you", "/api/"],
    },
    sitemap: "https://www.noblemedicwheels.com/sitemap.xml",
  };
}
