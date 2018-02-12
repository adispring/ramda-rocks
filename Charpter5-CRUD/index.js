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

/* 1. Create List/Object*/
// Object: objOf
// List: of

R.of(42)
R.objOf('name', 'ramda')

/* 2. Add Sth to Object/List*/

// Object: assoc, assocPath, converge+merge, mergeAll, mergeDeepLeft, mergeDeepRight
R.assoc('a', 3, {a: 1, b: 2});
R.assocPath(['a', 'b', 'd'], 42, {a: {b: {c: 0}}})
R.merge({ 'name': 'fred', 'age': 10 }, { 'country': 'China', 'city': 'Beijing' });
R.mergeAll([{foo:1},{bar:2},{baz:3}]);
R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }}, { age: 40, contact: { email: 'baa@example.com' }});

var mergeDeepWithResult = R.mergeDeepWith(R.concat,
                { a: true, c: { values: [10, 20] }},
                                          { b: true, c: { values: [15, 35] }});
console.log(mergeDeepWithResult);
//=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}

// List: insert, insertOf

/* 3. Remove Sth from Object/List*/

// Object: dissoc, dissocPath, omit

// List: dropX, uniqX, filter, reject, without
