var main = {}


main.config = require('./config')

main.user = {
  accessToken: '',
  authorization: '',
  loggedIn: false
}


main.register = require('./methods/register')
main.login = require('./methods/login')
main.logout = require('./methods/logout')

main.createProject = function(){}
main.getProjects = function(){}
main.updateProject = function(){}
main.uploadProjectImage = function(){}

main.getApps = function(){}

main.createAppleApp = function(){}
main.updateAppleApp = function(){}

main.getAppleKeyValues = function(){}
main.uploadAppleAppImage = function(){}
main.uploadAppleAppCert = function(){}
main.getAppleAppKeyValues = function(){}


module.exports = main
