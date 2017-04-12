var user = require('../user.js');

module.exports = {
  getName: (req, res) => {
    res.json({name: user.name})
  },

  getLocation: (req, res) => {
    res.json({location: user.location})
  },

  getOccupations: (req, res) => {
    var results = [];
    if (req.query.order === 'asc'){
      for (key in user.occupations){
        results.push(user.occupations[key]);
      }
      return res.send({Occupations: results.sort()});
    } else if (req.query.order === 'desc'){
      for (key in user.occupations){
        results.push(user.occupations[key]);
      }
      return res.send({Occupations: results.sort().reverse()});
    }
    res.json({occupation: user.occupations});
  },

  getLatestJob: (req, res) => {
    var latestjob = user.occupations.slice(-1);
    res.json({latestjob});
  },

  getHobbies: (req, res) => {
    res.json({hobbies: user.hobbies})
  },

  getHobbyType: (req, res) => {
    var results = [];
    for (key in user.hobbies){
      if (user.hobbies[key].type === req.params.id){
        results.push({hobbies:user.hobbies[key]});
      }
    }
    res.send(results);
  },

  getFamily: (req, res) => {
    var results = [];
    if (req.query.relation){
      for (key in user.family){
        if (user.family[key].relation === req.query.relation){
          results.push({family:user.family[key]});
        }
      }
      res.send(results);
    }
    res.json({family: user.family})
  },

  getFamilyGender: (req, res) => {
    var results = [];
    for (key in user.family){
      if (user.family[key].gender === req.params.id){
        results.push({family:user.family[key]});
      }
    }
    res.send(results);
  },

  getRestaurants: (req, res) => {
    var results = [];
    if (req.query.rating){
      for (key in user.restaurants){
        if (user.restaurants[key].rating >= req.query.rating){
          results.push(user.restaurants[key]);
        }
      }
      return res.json(results);
    }
    // End: For in loop ========================================================
    return res.json({restaurants: user.restaurants})
  },

  getRestaurantsName: (req, res) => {
    var results = [];
    for (key in user.restaurants){
      if (user.restaurants[key].name === req.params.id){
        results.push({restaurants:user.restaurants[key]});
      }
    }
    res.send(results);
  }

}
