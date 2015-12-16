var fetch = require('node-fetch')

module.exports = function(name, company, purpose){
  var url = this.config.API_URL + 'Project'
  var self = this

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
        Company: company,
        Purpose: purpose
      })
    }).then(function(response){
      if (response.status === 400) {
        throw new Error('Invalid format.')
      } else if (response.status !== 200) {
        throw new Error('Bad status code.')
      }
      return response.json()
    }).then(function(data){
      resolve(data)
    }).catch(function(err){
      reject(err)
    })
  })
}
