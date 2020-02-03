function loadServiceContent (){
  var json = require('../../contents/service-content.json'); 
  return json
}

function loadServiceDetailContent (){
  var json = require('../../contents/service-detail-content.json'); 
  return json
}

export default {
  loadServiceContent,
  loadServiceDetailContent
}


