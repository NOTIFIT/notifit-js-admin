module.exports = function(username, password){
  var self = this

  return new Promise(function(resolve, reject){
    self.user.loggedIn = false
    resolve('User logged out successfully')
  })
}
