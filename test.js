console.log('Running test')

var sdk = require('./index.js')


console.log('\nTest: register user')
sdk.register('testme', 'Test', 'Me', 'test@example.com', 'secret password').then(function(result){
  console.log('Success: user created')

  console.log('\nTest: login user')
  return sdk.login('testme', 'secret password')
}).then(function(result){
  console.log('Success: user logged in')

  return
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})
