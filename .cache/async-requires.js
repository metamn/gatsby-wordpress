// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("/home/cs/work/gatsby-wordpress/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-post-js": () => import("/home/cs/work/gatsby-wordpress/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-blog-js": () => import("/home/cs/work/gatsby-wordpress/src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---src-templates-category-js": () => import("/home/cs/work/gatsby-wordpress/src/templates/category.js" /* webpackChunkName: "component---src-templates-category-js" */),
  "component---src-templates-tag-js": () => import("/home/cs/work/gatsby-wordpress/src/templates/tag.js" /* webpackChunkName: "component---src-templates-tag-js" */),
  "component---src-templates-author-js": () => import("/home/cs/work/gatsby-wordpress/src/templates/author.js" /* webpackChunkName: "component---src-templates-author-js" */),
  "component---cache-dev-404-page-js": () => import("/home/cs/work/gatsby-wordpress/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/cs/work/gatsby-wordpress/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import("/home/cs/work/gatsby-wordpress/.cache/data.json")

