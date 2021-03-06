var fetch = require('node-fetch')

/**
 * Creates Apple application
 * @param {string} projectToken
 * @param {string} name
 * @param {boolean} isProduction false for private apps
 * @promise {object}
 */
module.exports = function(projectToken, name, isProduction){
  var url = this.config.API_URL + 'Project/'+projectToken+'/AppleApplication'
  var self = this
  console.log(url)

  return new Promise(function(resolve, reject){
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': self.getAuthHeader()
      },
      body: JSON.stringify({
        Name: name,
        IsProduction: isProduction ? 'true' : 'false'
      })
    }).then(function(response){
      if (response.status === 400) {
        throw new Error('Invalid format.')
      } else if (response.status !== 200) {
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
