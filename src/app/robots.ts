import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://hiteck-transport.vercel.app/sitemap.xml",
  };
}