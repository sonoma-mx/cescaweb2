import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soycesca.com";
  const paths = [
    "/",
    "/preparatoria-tijuana",
    "/prepa-6-meses",
    "/prepa-2-anos",
    "/licenciaturas",
    "/planteles",
    "/planteles/centro",
    "/planteles/villa-fontana",
    "/planteles/otay",
    "/planteles/plb",
    "/planteles/mariano",
    "/contacto",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
