var fs = require('fs');
var roomsData = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));
var mealsData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

const index = (req, res) => {
  res.render('index', { title: 'Express' });
};

const rooms = (req, res) => {
  res.render('rooms', { title: 'Rooms', rooms: roomsData });
};

const meals = (req, res) => {
  res.render('meals', { title: 'Meals', meals: mealsData });
};

module.exports = {
  index,
  rooms,
  meals
};