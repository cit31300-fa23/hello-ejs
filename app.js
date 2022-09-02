const express = require('express');
const path = require('path');

const app = express()
const port = 3000

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Add some dummy data
var users = [
  { name: 'thor', email: 'thor@asgard.com' },
  { name: 'loki', email: 'loki@asgard.com' },
  { name: 'jane', email: 'jane@asgard.com' }
];

app.get('/', (req, res) => {
  res.render('index', {
    users: users, // Pass an array of objects named users into a variable named 'users' in the view
    title: "People in Asgard", // Pass a string into a variable named 'title'
    header: "People" // Pass a string into a variable named 'header'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: "All About Asgard", // Pass a string into a variable named 'title'
    header: "About Asgard" // Pass a string into a variable named 'header'
  });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
});