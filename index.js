// Start: Requires =============================================================
const express = require('express');
const bodyParser = require('body-parser');
// End: Requires ===============================================================

// Invoke the express and make body-parser available in the app ================
const app = express();
app.use(bodyParser.json());


// Declares the port number to listen to on the app on =========================
const PORT = 4040;
app.listen(PORT, () => {
  console.log('listening on port:', PORT);
});
