/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `xGov`,
        siteUrl: `https://xgov.algorand.foundation`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/algorand.png`,
                name: `xGov Voting`,
                short_name: `xGov`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
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
