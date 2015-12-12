var fetch = require('node-fetch')

module.exports = function(username, password){
  var url = this.API_URL + 'Account/Login'
  var self = this

  return new Promise(function(resolve, reject){
    fetch(url, {
      method: 'post',
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(function(response){
      if (response.status !== 200) {
        throw new Error('Bad status code.')
      }
      var data = response.json()

      self.user.accessToken = data.accessToken
      self.user.authorization = data.Authorization

      resolve('User logged in successfully')
    }).catch(function(err){
      reject(err)
    })
  })
}
