var fetch = require('node-fetch')

/**
 * Updates project
 * @param {string} projectToken
 * @param {string} name
 * @param {string} company Company name
 * @param {string} purpose Purpose description
 * @promise {object}
 */
module.exports = function(projectToken, name, company, purpose){
  var url = this.config.API_URL + 'Project/'+projectToken
  var self = this

  return new Promise(function(resolve, reject){
    fetch(url, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': self.getAuthHeader()
      },
      body: JSON.stringify({
        Name: name,
        Company: company,
        Purpose: purpose
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
