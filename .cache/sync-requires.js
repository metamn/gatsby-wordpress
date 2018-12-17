// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": preferDefault(require("/home/cs/work/gatsby-wordpress/src/templates/page.js")),
  "component---src-templates-post-js": preferDefault(require("/home/cs/work/gatsby-wordpress/src/templates/post.js")),
  "component---src-templates-blog-js": preferDefault(require("/home/cs/work/gatsby-wordpress/src/templates/blog.js")),
  "component---src-templates-category-js": preferDefault(require("/home/cs/work/gatsby-wordpress/src/templates/category.js")),
  "component---src-templates-tag-js": preferDefault(require("/home/cs/work/gatsby-wordpress/src/templates/tag.js")),
  "component---src-templates-author-js": preferDefault(require("/home/cs/work/gatsby-wordpress/src/templates/author.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/cs/work/gatsby-wordpress/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/cs/work/gatsby-wordpress/src/pages/404.js"))
}

