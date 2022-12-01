const express = require('express');
const routes = require('./config/routes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port,  () => {
    console.log(`Node app running. Listening on port ${port}`);
})