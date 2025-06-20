let baseModel = require('./baseModel');

const INDEX = {
  idx: null,
  title: null,
  latitude: null,
  longitude: null,
};

exports.newModel = (opt) => {
  return baseModel.extend(INDEX, opt);
};
