var fetch = require('node-fetch')

module.exports = function(){
  var url = this.config.API_URL + 'Project'
  var self = this

  return new Promise(function(resolve, reject){
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': self.getAuthHeader()
      }
    }).then(function(response){
      if (response.status !== 200) {
        throw new Error('Bad status code ('+response.status+' but expected 200).')
      }
      return response.json()
    }).then(function(data){
      resolve(data)
    }).catch(function(err){
      reject(err)
    })
  })
}
