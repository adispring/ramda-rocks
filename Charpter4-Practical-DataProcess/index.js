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
var expect = require('expect');

// 函数实现
var zipMerge = R.zipWith(R.merge);
 
// 输入 
var a = [{num:1}, {num:2}, {num:3}];
var b = [{text:'haha'}, {text:'hoho'}, {text:'hengheng'}];
 
// 输出
var c = zipMerge(a, b); // [{num:1, text:'haha'}, {num:2, text:'hoho'},...]

var findByPropId =
  (id) => R.filter(R.where({ id: R.gt(R.__, id) }));

var data = [{
    "id": 1,
    "name": "北京市",
}, {
    "id": 2,
    "name": "上海市",
}];

findByPropId(0)(data)

var partTableTitles = R.map(R.concat(['ID', '日期', '管理单元']));

var CARDTITLES = {
  achievement: [
    '交易额', '消费毛收入',
  ],
  poi: [
    '门店数', '门店动销率',
  ],
  deal: [
    '项目数', '项目动销率',,
  ],
};

partTableTitles(CARDTITLES)

var data =
{
  status: 200,
  errorMsg: null,
  data: [
    {
      productId: 9196279,
      productName: '双人套餐',
      pois: [
        { name: '海底捞(望京店)', poiid: '00101', grossRate: 0.0329, netMargin: 0.0254},
        { name: '海底捞(三里屯店)', poiid: '00102', grossRate: 0.0227, netMargin: 0.0151},
      ],
    },
    {
      productId: 8868545,
      productName: '四人套餐',
      pois: [
        { name: '海底捞(五道口店)', poiid: '00103', grossRate: 0.0413, netMargin: 0.0315},
      ],
    },
    {
      productId: 7497885,
      productName: '烤鸭5折优惠',
      pois: [
        { name: '全聚德(前门店)', poiid: '00201', grossRate: 0.0320, netMargin: 0.0154},
      ],
    },
    {
      productId: 7497866,
      productName: '家庭畅享套餐',
      pois: [
        { name: '全聚德(门头沟店)', poiid: '00202', grossRate: 0.0839, netMargin: 0.0357},
      ],
    },
    {
      productId: 7497888,
      productName: '精品烤鸭一套',
      pois: [
        { name: '全聚德(旗舰店)', poiid: '00203', grossRate: '0.0119', netMargin: '0.0023'},
      ],
    },
  ],
}

var pickPoiid = R.compose(
  R.pluck('poiid'),
  R.flatten,
  R.pluck('pois'),
  R.prop('data')
);

pickPoiid(data)

var data = [
  [
    { name: '海底捞(望京店)', poiid: '00101', grossRate: '0.0329', netMargin: '0.0254'},
    { name: '海底捞(三里屯店)', poiid: '00102', grossRate: '0.0227', netMargin: '0.0151'},
    { name: '海底捞(五道口店)', poiid: '00103', grossRate: '0.0413', netMargin: '0.0315'},
  ],
  [
    { name: '全聚德(前门店)', poiid: '00201', grossRate: '0.0320', netMargin: '0.0154'},
    { name: '全聚德(门头沟店)', poiid: '00202', grossRate: '0.0839', netMargin: '0.0357'},
    { name: '全聚德(旗舰店)', poiid: '00203', grossRate: '0.0119', netMargin: '0.0023'},
  ],
];

var formatPercent = R.map(R.map(
  R.mapObjIndexed(
    (value, key) => (
      R.contains(key, ['grossRate', 'netMargin'])
      ? `${(parseFloat(value) * 100).toFixed(2)}%`
      : value
    )
  )
));

formatPercent(data)


// 输入
var test = [
    { discount: { pass: true, errText: 0 },
      minconsumption: { pass: true, errText: 0 },
      combine: { pass: true, errText: 0 },
    },
    {
      discount: { pass: true, errText: 0 },
      minconsumption: { pass: true, errText: 0 },
      combine: { pass: true, errText: 0 },
    },
    {
      discount: { pass: true, errText: 0 },
      minconsumption: { pass: true, errText: 0 },
      combine: { pass: false, errText: 0 },
    }];

var pickPass = R.compose(
  R.all(R.identity),
  R.map(R.prop('pass')),
  R.flatten,
  R.map(R.values)
);

// another implement
var pickPass = R.compose(
  R.all(R.propEq('pass', true)),
  R.chain(R.values)
);

pickPass(test)

var cubeType = (cubes =>
  R.zipObj(R.range(1, R.length(cubes) + 1), cubes)
  )([
    '交易BD人数',
    '人均GMV',
    '人均毛收入',
    '人均服务门店',
  ]);

// 输入
var data = [
  {
    'id': 1,
    'poiLabelNames': [
      '测试标签11',
      '测试标签12',
    ],
    'dealLabelNames': [
      '测试标签13',
      '测试标签14',
    ],
    'status': 0,
    'fileAddress': 'xxxx',
    'creator': 'chelihong',
    'addTime': 123,
    'finishTime': 234,
  }, {
    'id': 2,
    'poiLabelNames': [
      '测试标签21',
      '测试标签22',
    ],
    'dealLabelNames': [
      '测试标签23',
      '测试标签24',
    ],
    'status': 0,
    'fileAddress': 'xxxx',
    'creator': 'chelihong',
    'addTime': 123,
    'finishTime': 234,
  },
];
// 实现
var tagNames = ['poiLabelNames', 'dealLabelNames'];
var pickTags = R.compose(
  R.join(','),
  R.values,
  R.pick(tagNames)
);

var transTags = R.map(
  R.converge(
    R.merge,
    [
      R.applySpec({ tags: pickTags }),
      R.omit(tagNames)
    ]
  )
);


transTags(data)

var mapStateToProps = R.prop('overview');
state => state.overview;
