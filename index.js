var main = {}


main.API_URL = 'http://notifit.io/api/Mobile/'

main.user = {
  accessToken: '',
  authorization: ''
}


main.register = require('./methods/register')
main.login = require('./methods/login')

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
