var fetch = require('node-fetch')

/**
 * Gets Apple keys and values
 * @param {string} projectToken
 * @promise {object}
 */
module.exports = function(projectToken){
  var url = this.config.API_URL + 'Project/'+projectToken+'/KeyValues'
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
