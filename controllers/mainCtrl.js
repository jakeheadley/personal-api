var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');


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
    // End: For in loop ===========================
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
  },
  // Put name
  putName: (req, res) => {
    // console.log('name', req.body);
    res.send(req.name);
  },
  // Put location
  putLocation: (req, res) => {
    // console.log('location', req.body);
    res.send(req.location);
  },
  // Post hobbies
  postHobbies: (req, res) => {
    // console.log('hobbies', req.body);
    user.hobbies.push(req.body);
    res.json(req.hobbies);
  },
  // Post occupations
  postOccupations: (req, res) => {
    // console.log('occupations', req.body);
    user.occupations.push(req.body);
    res.json(req.occupations);
  },
  // Post family
  postFamily: (req, res) => {
    // console.log('family', req.body);
    user.family.push(req.body);
    res.json(req.family);
  },
  // Post restaurants
  postRestaurants: (req, res) => {
    // console.log('restaurants', req.body);
    user.restaurants.push(req.body);
    res.json(req.restaurants);
  },
  // ===========================================================================
  // Start SKILLZ
  getSkillz: (req, res) => {
    var results = [];
    if (req.query.experience){
      for (key in skillz){
        if (skillz[key].experience === req.query.experience){
          results.push({skillz:skillz[key]});
        }
      }
      return res.send(results);
    }
    res.json({skillz:skillz});
  },
  postSkillz: (req, res, next) => {
    console.log('skillz', req.body);
    skillz.push(req.body);
    return res.json({skillz:skillz});
  },
  // ===========================================================================
  // Start SECRETS
  getSecrets: (req, res, next) => {
    return res.send({secrets:secrets.secrets});
  }

}
