const express = require('express');
const routes = require('./config/routes');

const app = express();
const port = 3000;

app.use(express.json());

routes(app);

app.listen(port,  () => {
    console.log(`Node app running. Listening on port ${port}`);
})