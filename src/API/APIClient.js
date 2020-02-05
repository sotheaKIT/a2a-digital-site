function loadAPI(endPoint){
  var json = require('../../contents/'+endPoint+'.json'); 
  alert(json)
  return json
}



export default {
  loadAPI
}


