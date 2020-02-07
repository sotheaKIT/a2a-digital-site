function getImgUrl(pic) {
  var images = require.context('../../../public/assets/', false, /\.png$/)
  return images('./' + pic + ".png")
}


export default {
  getImgUrl
}