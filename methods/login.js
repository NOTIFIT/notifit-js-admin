var fetch = require('node-fetch')

module.exports = function(username, password){
  var url = this.config.API_URL + 'Account/Login'
  var self = this

  return new Promise(function(resolve, reject){
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Username: username,
        Password: password
      })
    }).then(function(response){
      if (response.status === 400) {
        throw new Error('Invalid username or password.')
      } else if (response.status !== 200) {
        throw new Error('Bad status code.')
      }
      return response.json()
    }).then(function(data){
      self.user.accessToken = data.accessToken
      self.user.authorization = data.Authorization
      self.user.loggedIn = true
      resolve('User logged in successfully.')
    }).catch(function(err){
      reject(err)
    })
  })
}
