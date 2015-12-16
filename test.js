console.log('Running test')

var sdk = require('./index.js')

var user = {
  key: Math.floor(Math.random()*10000)
}
user.username = 'User-'+user.key
user.firstname = 'First-'+user.key
user.lastname = 'Last-'+user.key
user.email = 'test+'+user.key+'@example.com'
user.password = 'SuperPassword-'+user.key


console.log('\nTest: register user')
sdk.register(user.username, user.firstname, user.lastname, user.email, user.password).then(function(result){
  console.log('Success: user created')

  console.log('\nTest: login user')
  return sdk.login(user.username, user.password)
}).then(function(result){
  console.log('Success: user logged in')

  console.log('\nTest: logout user')
  return sdk.logout()
}).then(function(result){
  console.log('Success: user logged out')
  return
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})
