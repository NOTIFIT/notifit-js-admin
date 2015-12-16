module.exports = function(){
  if (this.user.loggedIn) {
    return this.user.authorization + ' ' + this.user.accessToken
  } else {
    throw new Error('User not logged in.')
  }
}
