import type {GatsbyConfig} from "gatsby";

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config: GatsbyConfig = {
    siteMetadata: {
        title: `xGov`,
        siteUrl: `https://xgov.algorand.foundation`
    },
    plugins: [
        // "gatsby-plugin-webpack-bundle-analyser-v2",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/algorand.png`,
                name: `xGov Voting`,
                short_name: `xGov`,
                start_url: `/`,
                background_color: `#13171f`,
                theme_color: `#0172ad`,
                display: `standalone`,
            },
        },

        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "content",
                "path": `${__dirname}/Proposals`
            },
        }, {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-highlight-code`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
    ]
};

export default config;
