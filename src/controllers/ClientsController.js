const ClientRepository = require("../repositories/ClientRepository");
const JsonResponseHelper = require("../helpers/JsonResponseHelper");

class ClientsController {
  constructor() {
    this.clientRepository = ClientRepository;
  }

  async getClients(req, res, next) {
    this.clientRepository.list((err, data) => {
      JsonResponseHelper.response(err, data, res, next);
    });
  }

  async getById(req, res, next) {
    this.clientRepository.getById(req.params.id, (err, data) => {
      JsonResponseHelper.response(err, data, res, next);
    });
  }

  async add(req, res, next) {
    this.clientRepository.create(req.body, (err, data) => {
      JsonResponseHelper.response(err, data, res, next);
    });
  }

  async delete(req, res, next) {
    this.clientRepository.deleteClient(req.params.id, (err, data) => {
      JsonResponseHelper.response(err, data, res, next);
    });
  }

  async update(req, res, next) {
    this.clientRepository.update(req.params.id, req.body, (err, data) => {
      JsonResponseHelper.response(err, data, res, next);
    });
  }
}

module.exports = new ClientsController();
