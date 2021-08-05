import React from "react"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 const query = graphql`
   {
     site {
       siteMetadata {
         title
         description
       }
     }
   }
 `
 
 const Seo = ({ title, description }) => {
   const { site } = useStaticQuery(query)
   const metaDescription = description || site.siteMetadata.description
   return (
     <Helmet
       htmlAttributes={{ lang: "ja" }}
       title={`${title} | ${site.siteMetadata.title}`}
       meta={[
         { name: `description`, content: metaDescription },
         { property: `og:title`, content: title},
         { property: `og:description`, content: description},
         { property: `og:type`, content: `website`},
        ]}
     ></Helmet>
   )
 }
 
 export default Seo