const Client = require("../models/ClientsModel");
const MongooseRepository = require('./MongooseRepository');


class ClientRepository extends MongooseRepository {
  constructor() {
    super(new Client());
  }

  deleteClient(id, data, callback) {
    return this.delete({ _id: id }, data, callback);
  }

  updateClient(id, data, callback) {
    return this.update({ _id: id }, data, callback);
  }
}

module.exports = new ClientRepository()