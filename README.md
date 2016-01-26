# NOTIFIT admin Javascript SDK

This Javascript package creates layer to communicate with NOTIFIT administration back-end.

## How to use it

### Require it first

```javascript
var sdk = require('notifit-admin-js')
```

### Register user

```javascript
sdk.register('my_username', 'John', 'Doe', 'john@example.com', 'mySuperPass12345').then(function(result){
  console.log('User registered')
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})
```

### Login user

```javascript
sdk.login('my_username', 'mySuperPass12345').then(function(result){
  console.log('User logged in')
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})
```

### Create project

```javascript
sdk.createProject('My first project', 'BestCoders', 'Test project').then(function(result){
  console.log('Project created')
  console.log(result) // created project data can be accessed here
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})
```

### Update project

```javascript
var project = {
  Token: 'xyz' // You must know the project token
}

sdk.updateProject(project.Token, 'My first project v2', 'BestCoders v2', 'Test project v2').then(function(result){
  console.log('Project updated')
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})
```

### Get all projects

```javascript
sdk.getProjects().then(function(result){
  console.log('Project fetched')
  console.log(result)
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})
```

### Create Apple Application

```javascript
sdk.createAppleApp(project.Token, 'iOS super app', false).then(function(result){
  console.log('Application created')
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})
```

### Get Apple key values

```javascript
sdk.getAppleKeyValues(project.Token).then(function(result){
  console.log(result)
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})
```

### Logout user

```javascript
sdk.logout()
```
