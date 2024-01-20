process.env.rootPath = __dirname;
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cookieParser   = require('cookie-parser');
const cors           = require('cors');
const serverless     = require('serverless-http');
const fileUpload     = require('express-fileupload');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(fileUpload());
app.use('/', require('./routes'));

app.get('*', async (req, res) => {
  res.status(404).send('404 not found');
});

// Export the handler for AWS Lambda
module.exports.handler = serverless(app);

