var CARS = [{
  name: 'Volkswagen',
  model: 'Beetle',
  horsepower: 221,
  price: 180000,
  in_stock: true,
  origin: 'Germany',
  quality: [{
    name: 'overall',
    rating: 2.5,
  }, {
    name: 'comfortable',
    rating: 2,
  }, {
    name: 'driving',
    rating: 3,
  }],
}, {
  name: 'Tesla',
  model: 'Model S',
  horsepower: 525,
  price: 800000,
  in_stock: false,
  origin: 'USA',
  quality: [{
    name: 'overall',
    rating: 4.5,
  }, {
    name: 'comfortable',
    rating: 5,
  }, {
    name: 'driving',
    rating: 4,
  }],
}, {
  name: 'Volkswagen',
  model: 'Touareg',
  horsepower: 308,
  price: 980000,
  in_stock: true,
  origin: 'Germany',
  quality: [{
    name: 'overall',
    rating: 4,
  }, {
    name: 'comfortable',
    rating: 5,
  }, {
    name: 'driving',
    rating: 3,
  }],
}, {
  name: 'Audi',
  model: 'A4L',
  horsepower: 444,
  price: 320000,
  in_stock: true,
  origin: 'Germany',
  quality: [{
    name: 'overall',
    rating: 3.5,
  }, {
    name: 'comfortable',
    rating: 4,
  }, {
    name: 'driving',
    rating: 3,
  }],
}, {
  name: 'Honda',
  model: 'Accord',
  horsepower: 268,
  price: 240000,
  in_stock: true,
  origin: 'Japan',
  quality: [{
    name: 'overall',
    rating: 3,
  }, {
    name: 'comfortable',
    rating: 3.2,
  }, {
    name: 'driving',
    rating: 2.5,
  }],
}, {
  name: 'Ford',
  model: 'Mustang GT',
  horsepower: 550,
  price: 420000,
  in_stock: false,
  origin: 'USA',
  quality: [{
    name: 'overall',
    rating: 4,
  }, {
    name: 'comfortable',
    rating: 3.5,
  }, {
    name: 'driving',
    rating: 5,
  }],
}];

var R = require('ramda');
var expect = require('expect');

var group = R.compose(
  R.groupBy(R.prop('origin')),
  R.map(R.pick(['name', 'model', 'origin']))
);

var sort = R.compose(
  R.sortBy(R.prop('horsepower')),
  R.map(R.pick(['model', 'origin', 'horsepower']))
);

var sortByOverall = R.sortBy(R.path(['quality', 0, 'rating']));

var isLastInStock = cars => {
  var lastCar = R.last(CARS);
  return R.prop('in_stock', lastCar);
};

var isLastInStockFP = R.compose(
  R.prop('in_stock'),
  R.last
);

var dataProcess = isLastInStockFP;

dataProcess(CARS);
