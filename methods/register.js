module.exports = function(username, firstName, lastName, email, password){
  var url = this.API_URL + 'Account/Register'

  return new Promise(function(resolve, reject){
    if (true) {
      resolve('User created successfully')
    } else {
      reject(Error('User already exists.'))
    }
  })
}