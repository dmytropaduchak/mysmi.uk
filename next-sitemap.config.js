/** @type {import('next-sitemap').IConfig} */
module.exports = {
  exclude: ["/icon", "/apple-icon"],
  siteUrl: "https://mysmi.uk",
  changefreq: "weekly",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async (config) => [
    ...["car-key-replacement", "car-unlocking", "spare-car-keys", "ignition-barrel-replacement", "car-key-programming", "car-key-repair"].map((path) => ({
      loc: `/services/${path}`,
      changefreq: config.changefreq,
      priority: 0.9,
      lastmod: new Date().toISOString(),
    })),
  ],
};