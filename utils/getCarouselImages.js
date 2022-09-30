const rawImages = require.context("@/static/images", false, /\.JPG$/);

export default () => rawImages.keys().map(k => k.replace("./", "/images/"))
