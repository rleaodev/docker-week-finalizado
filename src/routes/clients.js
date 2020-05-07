const express = require('express')
const router = express.Router()

const ClientsController = require("../controllers/ClientsController"); 

router.get("/", ClientsController.getClients.bind(ClientsController));
router.get("/:id", ClientsController.getById.bind(ClientsController));
router.post("/", ClientsController.add.bind(ClientsController));
router.put("/:id", ClientsController.update.bind(ClientsController));
router.delete("/:id", ClientsController.delete.bind(ClientsController));


module.exports = router
