function loadAPI(endPoint){
  var json = require('../../contents/'+endPoint+'.json'); 
  return json
}

export default {
  loadAPI
}


