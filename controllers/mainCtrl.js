var user = require('../user.js');
//console.log(user.hobbies);

// ES6 style
// module.exports = {
//   getName: () => {console.log(user.name)}
// }

// ES5 style
// module.exports = {
//   getName: function(req, res){
//     res.json({name: user.name})
//   }
// }

module.exports = {
  getName: (req, res) => {
    res.json({name: user.name})
  },
  getLocation: (req, res) => {
    res.json({location: user.location})
  },
  getOccupations: (req, res) => {
    res.json({occupation: user.occupations})
  },
  getLatestJob: (req, res) => {
    var latestjob = user.occupations.slice(-1);
    res.json({latestjob});
  },
  getHobbies: (req, res) => {
    res.json({hobbies: user.hobbies})
  }
}



// function getName (user){
//   return user.name;
// };
//
// function getName (user){
//   return user.location;
// };
//
// function getName (user){
//   return user.occupations;
// };
//
// function getName (user){
//   return user.hobbies;
// };
