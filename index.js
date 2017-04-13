// Start: Requires =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./controllers/mainCtrl.js');
const middleware = require('./controllers/middleware.js');
// End: Requires ===============================================================

// Invoke the express and make body-parser available in the app ================
const app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);
// =============================================================================

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/latestjob', mainCtrl.getLatestJob);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:id', mainCtrl.getHobbyType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:id', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:id', mainCtrl.getRestaurantsName);
// -----------------------------------------------------------------------------
app.get('/skillz', mainCtrl.getSkillz);

// Things that can be PUT or PUSHED ============================================
// These relate to functions which are contained in the mainCtrl.js file =======

app.put('/name', mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);
app.post('/hobbies', mainCtrl.postHobbies);
app.post('/occupations', mainCtrl.postOccupations);
app.post('/family', mainCtrl.postFamily);
app.post('/restaurants', mainCtrl.postRestaurants);
// -----------------------------------------------------------------------------
app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);

// Declares the port number to listen to on the app on =========================
const PORT = 4040;
app.listen(PORT, () => {
  console.log('listening on port:', PORT);
});
