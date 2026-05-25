import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://hiteck-transport.vercel.app",
    },

    {
      url: "https://hiteck-transport.vercel.app/about",
    },

    {
      url: "https://hiteck-transport.vercel.app/services",
    },

    {
      url: "https://hiteck-transport.vercel.app/contact",
    },

  ];
}