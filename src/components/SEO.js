import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
 
 const query = graphql`
   {
     site {
       siteMetadata {
         title
         description
         siteUrl
         image
         twitterName
       }
     }
   }
 `
 
 const Seo = ({ title, description, image }) => {
   const { site } = useStaticQuery(query)
   const metaDescription = description || site.siteMetadata.description
   const metaImage = `${site.siteMetadata.siteUrl}${image || site.siteMetadata.image}`

   return (
     <Helmet
       htmlAttributes={{ lang: "ja" }}
       title={`${title} | ${site.siteMetadata.title}`}
       meta={[
         { name: `description`, content: metaDescription },
         { name: `image`, content: metaImage },
         { property: `og:image`, content: metaImage },
         { property: `og:description`, content: description },
         { property: `og:title`, content: title },
         { property: `og:type`, content: `website`},
         {
          name: `twitter:card`,
          content: `summary`,
         },
         {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterName,
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
          name: `twitter:image`,
          content: metaImage,
         },
        ]}
     ></Helmet>
   )
 }
 
 export default Seo

 Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
}