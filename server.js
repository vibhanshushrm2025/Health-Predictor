const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  res.render('home');
});

app.get('/authentication', async (req, res) => {
  res.render('authentication');
});

app.get('/bloodreport', async (req, res) => {
  res.render('bloodreport');
});

app.get('/xrayreport', async (req, res) => {
  res.render('xrayreport');
});

app.get('/recoveryreport', async (req, res) => {
  res.render('recoveryreport');
});
app.get('/communitypoll', async (req, res) => {
  res.render('communitypoll');
});


app.listen(3000, () => {
  console.log('APP IS LISTENING ON PORT 3000!');
});
