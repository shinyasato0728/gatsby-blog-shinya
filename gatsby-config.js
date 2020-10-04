/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `{{{サイトのtitleを入れる}}}`,
    description: `{{{サイトのdescriptionを入れる}}}`,
    siteUrl: `{{{サイトの絶対パスを入れる}}}`,
    ogImage: `{{{サイトのOGPのパスを入れる}}}`,
    author: `{{{あなたの名前を入れる}}}`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-{{{GAのトラッキングID}}}"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `{{{サイトの名前を入れる}}}`,
        short_name: `{{{サイトの名前を入れる}}}`,
        start_url: `/?standalone=true`,
        theme_color: `{{{カラーコード}}}`,
        background_color: `{{{カラーコード}}}`,
        display: `standalone`,
        icon: `static/icon.png`,
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('autoprefixer'),
          require('postcss-import'),
          require('postcss-simple-vars'),
          require('postcss-mixins'),
          require('postcss-nesting'),
          require('postcss-css-reset'),
          require('postcss-color-function'),
          require('postcss-flexbugs-fixes'),
          require('postcss-custom-media'),
          require('postcss-media-minmax'),
          require('postcss-pixels-to-rem')
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links"
          },
          {
            resolve: `gatsby-remark-prismjs`,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.html': [
            'cache-control: public, max-age=0, must-revalidate'
          ],
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-draft`
  ]
}
