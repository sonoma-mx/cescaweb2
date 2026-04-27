import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://soycesca.com/sitemap.xml",
    host: "https://soycesca.com",
  };
}
