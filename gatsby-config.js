require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
  siteMetadata: {
    title: `MecaBlog`,
    description: `日々のプログラミングの学習記録、また趣味の事を投稿する。エンジニアブログです。`,
    author: `カニヤ`,
    siteUrl: `https://mecablog.netlify.app/`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve:`gatsby-plugin-sitemap`,
      options: {
        excludes: [`/posts`,`/contact`,`/success`,`/category/*`]
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://mecablog.netlify.app/`,
        sitemap: `https://mecablog.netlify.app/sitemap/sitemap-0.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MecaBlog`,
        short_name: `MecaBlog`,
        start_url: `/`,
        background_color: `#EEEEEE`,
        theme_color: `#EEEEEE`,
        display: `minimal-ui`,
        icon: `src/assets/myicon.png`, 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              maintainCase: true,
            },
          },
          { resolve: `gatsby-remark-images` }
        ],
      },
    },
    `gatsby-transformer-remark`,
  ],
}
