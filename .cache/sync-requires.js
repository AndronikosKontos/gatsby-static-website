
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/workspaces/gatsby-static-website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/workspaces/gatsby-static-website/src/pages/index.js"))
}

