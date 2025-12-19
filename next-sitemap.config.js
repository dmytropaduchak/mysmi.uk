const locations = require("./src/locations/locations.json");
const services = require("./src/services/services.json");
const brands = require("./src/brands/brands.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  exclude: ["/icon", "/apple-icon"],
  siteUrl: "https://mysmi.uk",
  changefreq: "weekly",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async (config) => [
    ...brands.map((i) => ({
      loc: `/brands/${i.slug}`,
      changefreq: config.changefreq,
      priority: 0.9,
      lastmod: new Date().toISOString(),
    })),
    ...services.map((i) => ({
      loc: `/services/${i.slug}`,
      changefreq: config.changefreq,
      priority: 0.9,
      lastmod: new Date().toISOString(),
    })),
    ...locations.map((i) => ({
      loc: `/locations/${i.slug}`,
      changefreq: config.changefreq,
      priority: 0.9,
      lastmod: new Date().toISOString(),
    })),
  ],
};