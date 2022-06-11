// importing express modules
const express = require('express');
const fs = require('fs')
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes.api');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware for parsing JSON and urlencoded form data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(apiRoutes);
app.use(htmlRoutes);

 // start server
 app.listen(PORT, () => {
     console.log(`Server live on port ${PORT}!`);
});