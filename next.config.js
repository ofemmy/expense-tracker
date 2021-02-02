const withImages = require("next-images");
module.exports = withImages();
module.exports = {
  target: "serverless",
  async rewrites() {
    return [
      // Do not rewrite API routes
      {
        source: "/api/:any*",
        destination: "/api/:any*",
      },
      // Rewrite everything else to use `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
  ...withImages(),
};
