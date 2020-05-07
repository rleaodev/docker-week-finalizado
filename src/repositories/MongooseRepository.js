const mongoose = require('../db/mongo')

// eslint-disable-next-line no-unused-vars
class MongooseRepository {
  constructor(model) {
    if (this.constructor === MongooseRepository) {
      throw new TypeError(
        'Abstract class "MongooseRepository" cannot be instantiated directly.'
      );
    }

    if (!(model.prototype instanceof mongoose.Model)) {
      throw new TypeError("Model must be an instance of mongoose.Model");
    }

    this.model = model;
  }

  async list(callback) {
    return this.listBy({}, callback);
  }

  async getById(_id, callback) {
    return this.model.findById(_id, callback);
  }

  async listBy(objectToFilter = {}, callback) {
    return this.model.find(objectToFilter, callback);
  }

  async getOne(objectToFilter = {}, callback) {
    return this.model.findOne(objectToFilter, callback);
  }

  create(obj, callback) {
    return this.model.create(obj, callback);
  }

  insertMany(arr, callback) {
    return this.model.insertMany(arr, callback);
  }

  update(id, data, callback) {
    return this.model.findByIdAndUpdate(id, {
      $set: data,
    }, callback);
  }

  delete(obj, callback) {
    return this.model.findOneAndDelete(obj, callback);
  }
}

module.exports = MongooseRepository