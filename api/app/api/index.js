const api = {};

api.data = (req, res) => {
  res.json([
    { price: 200.5, times: 2 },
    { price: 100.2, times: 5 },
    { price: 50.5, times: 1 },
    { price: 70.5, times: 2 },
  ]);
};

module.exports = api;
