var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
  },
  generateId: function(req, res, next) {
    req.body.id = skillz.length+1;
    next();
  },

  verifyUser: function(req, res, next) {
    // This method should check that the parameters match a username and PIN you set.
    // If they do, pass the request on to the next function; otherwise, send an error message
    // back to the user without moving to the next function.
    // console.log(req.params.un, req.params.pw);
    if (req.params.un === secrets.un && req.params.pw === secrets.pw){
      next();
    } else {
      res.status(401).send('Error: Your credentials do not match our records');
    }

  }

}
