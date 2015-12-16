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

var project = {}


console.log('\nTest: register user')
sdk.register(user.username, user.firstname, user.lastname, user.email, user.password).then(function(result){
  console.log('Success: user created')
  console.log('User: ' + user.username + ' : ' + user.password)


  console.log('\nTest: login user')
  return sdk.login(user.username, user.password)
}).then(function(result){
  console.log('Success: user logged in')


  console.log('\nTest: create projects')
  return sdk.createProject('My first project', 'BestCoders', 'Test project')
}).then(function(){
  return sdk.createProject('My Second project', 'SuperCoders', 'Another test project')
}).then(function(result){
  console.log('Success: two projects created')
  project = result


  console.log('\nTest: get all projects')
  return sdk.getProjects()
}).then(function(result){
  console.log('Success: projects fetched')
  console.log(result)


  console.log('\nTest: logout user')
  return sdk.logout()
}).then(function(result){
  console.log('Success: user logged out')
  return
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})
