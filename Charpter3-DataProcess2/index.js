var CARS = [{
  name: 'Volkswagen DesAuto',
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
  name: 'Tesla SpaceX',
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
var _ = require('ramda');
var expect = require('expect');

// Exercise 1:
// ============
// Use _.compose() to rewrite the function below. Hint: _.prop() is curried.
var isLastInStock = function(cars) {
  var last_car = R.last(cars);
  return R.prop('in_stock', last_car);
};

isLastInStock(CARS);


var isLastInStockR = R.compose(
  R.prop('in_stock'),
  R.last
);

isLastInStockR(CARS)
// Exercise 2:
// ============
// Use _.compose(), _.prop() and _.head() to retrieve the name of the first car.
var nameOfFirstCar = R.compose(
  R.prop('name'),
  R.head
);

nameOfFirstCar(CARS);

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition.
var _average = function(xs) {
  return _.reduce(_.add, 0, xs) / xs.length;
}; // <- leave be

var averageDollarValue = function(cars) {
  var dollar_values = _.map(function(c) {
    return c.price;
  }, cars);
  return _average(dollar_values);
};

averageDollarValue(CARS)

var averageDollarValueR = R.compose(
  _average,
  R.map(R.propOr(0, 'price'))
);

averageDollarValueR(CARS)

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ['ferrari_ff'].

var _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

var sanitizeNames = R.compose(
  R.map(R.evolve({
    name: R.compose(_underscore, R.toLower),
  }))
);

sanitizeNames(CARS);


// Bonus 1:
// ============
// Refactor availablePrices with compose.

var availablePrices = function(cars) {
  var available_cars = _.filter(_.prop('in_stock'), cars);
  return available_cars.map(function(x) {
    return accounting.formatMoney(x.dollar_value);
  }).join(', ');
};

var availablePricesR = R.compose(
  R.join(', '),
  R.map(R.prop('price')),
  R.reject(R.prop('in_stock'))
);

availablePricesR(CARS)
// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip().

var fastestCar = function(cars) {
  var sorted = R.sortBy(function(car) {
    return car.horsepower;
  }, cars);
  var fastest = R.last(sorted);
  return fastest.name + ' is the fastest';
};

var fastestCarR = R.compose(
  R.last,
  /* R.map(R.pick(['name', 'horsepower'])),*/
  R.sortBy(R.prop('horsepower')),
);

const mamFilter = map . filter


fastestCarR(CARS)

const obj = {
  a: {
    b: {
      c: 2,
    },
  },
};

const c = (obj.a && obj.a.b && obj.a.b.c) ? obj.a.b.c : undefined;

const c = R.pathOr(0, ['a', 'd', 'c'], obj);

