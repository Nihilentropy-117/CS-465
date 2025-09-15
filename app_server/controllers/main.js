const index = (req, res) => {
  res.render('index', { title: 'Express' });
};

const travlr = (req, res) => {
  res.render('travlr', { title: 'Travlr' });
};

module.exports = {
  index,
  travlr
};