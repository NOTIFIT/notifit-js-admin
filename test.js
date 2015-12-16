console.log('Running test')

var sdk = require('./index.js')


console.log('\nTest: register user')
sdk.register('testme', 'Test', 'Me', 'test@example.com', 'secret password').then(function(result){
  console.log('Success: user created')

  console.log('\nTest: login user')
  return sdk.login('Abc123', 'Abc12345')
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
