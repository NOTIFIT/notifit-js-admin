var main = {}


main.config = require('./config')

main.user = {
  accessToken: '',
  authorization: '',
  loggedIn: false
}

// Public methods
main.register = require('./methods/register')
main.login = require('./methods/login')
main.logout = require('./methods/logout')

main.createProject = require('./methods/createProject')
main.getProjects = require('./methods/getProjects')
main.updateProject = require('./methods/updateProject')
main.uploadProjectImage = require('./methods/uploadProjectImage')

main.getApps = require('./methods/getApps')

main.createAppleApp = require('./methods/createAppleApp')
main.updateAppleApp = require('./methods/updateAppleApp')

main.getAppleKeyValues = require('./methods/getAppleKeyValues')
main.uploadAppleAppImage = require('./methods/uploadAppleAppImage')
main.uploadAppleAppCert = require('./methods/uploadAppleAppCert')
main.getAppleAppKeyValues = require('./methods/getAppleAppKeyValues')

// Private methods
main.getAuthHeader = require('./methods/getAuthHeader')


module.exports = main
