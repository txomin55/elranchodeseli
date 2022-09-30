const rawPosts = require.context("@/netlify/functions/data/posts", true, /\.js$/);

const posts = rawPosts.keys().reduce((obj, path) => {
  obj[path] = rawPosts(path).default
  return obj;
}, {});

export default () => Object.values(posts)
