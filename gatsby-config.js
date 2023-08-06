// const {existsSync, symlinkSync} = require("fs");
// const {resolve} = require("path");
//
// if(!existsSync('./src/pages/proposal')){
//   symlinkSync(resolve('./Proposals'), resolve('./src/pages/proposal'))
// }
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `cockney`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": `${__dirname}/Proposals`
    },
  },   {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },]
};
