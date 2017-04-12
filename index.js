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



// Declares the port number to listen to on the app on =========================
const PORT = 4040;
app.listen(PORT, () => {
  console.log('listening on port:', PORT);
});
