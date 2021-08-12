const path = require('path')
const { paginate } = require("gatsby-awesome-pagination");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/index.js`);

  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const pages = result.data.allMdx.nodes;

  paginate({
    createPage,
    items: pages,
    itemsPerPage: 10,
    component: template,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
  });

  pages.forEach(( node, index) => {
    const prev = index === 0 ? null : pages[index - 1].id
    const next = index === pages.length - 1 ? null : pages[index + 1].id
    createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug: node.frontmatter.slug,
        id: node.id,
        prev,
        next,
      },
    })
  })

  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/category/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })
}
