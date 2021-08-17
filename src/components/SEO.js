import React from "react"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 const query = graphql`
   {
     site {
       siteMetadata {
         title
         description
         author
         siteUrl
         image
       }
     }
   }
 `
 
 const Seo = ({ title, description, image }) => {
   const { site } = useStaticQuery(query)
   const metaDescription = description || site.siteMetadata.description
   const metaImage = image || site.siteMetadata.image
   return (
     <Helmet
       htmlAttributes={{ lang: "ja" }}
       title={`${title} | ${site.siteMetadata.title}`}
       meta={[
         { name: `description`, content: metaDescription },
         {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${metaImage}`,
         },
         { property: `og:description`, content: description},
         { property: `og:title`, content: title},
         { property: `og:type`, content: `website`},
         {
          name: `twitter:card`,
          content: `summary`,
         },
         {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
         },
         {
          name: `twitter:title`,
          content: title,
         },
         {
          name: `twitter:description`,
          content: metaDescription,
         },
         {
          name:"twitter:image",
          content:`${site.siteMetadata.siteUrl}${metaImage}`,
         },
        ]}
     ></Helmet>
   )
 }
 
 export default Seo