const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
var cors = require("cors");
app.use(cors());


const db = require('./db/db');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', require('./routes/user'));

app.get('/', (req, res) => res.send('hello'));
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
