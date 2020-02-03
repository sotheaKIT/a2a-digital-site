function getImgUrl(pic) {
  var images = require.context('../assets/', false, /\.png$/)
  return images('./' + pic + ".png")
}


export default {
  getImgUrl
}