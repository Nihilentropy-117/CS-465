// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

const travel = (req, res) => {
  // console.log('TRAVEL CONTROLLER START');
  fetch(tripsEndpoint, options)
    .then(res => res.json())
    .then(json => {
      // console.log(json);
      if (!Array.isArray(json)) {
        return res.status(500).send('Invalid data format');
      }
      if (json.length === 0) {
        return res.status(404).send('No trips found');
      }
      res.render('travel', {title: 'Travlr Getaways', trips: json});
    })
    .catch(err => res.status(500).send(err.message));
  // console.log('TRAVEL CONTROLLER END');
};

module.exports = {
  travel
};