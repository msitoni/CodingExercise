const router = require('express-promise-router')();
const farmController = require('../controllers/farm.controller');

const modelName = '/farm';


router.post(modelName, farmController.createFarm);

router.get(modelName, farmController.listAllFarms);

router.get(`${modelName}/findFarmByNameDocument/:name`, farmController.findFarmByNameDocument);

router.get(`${modelName}/:id`, farmController.findFarmById);

router.get(`${modelName}/findFarmByIdDocument/:id`, farmController.findFarmByIdDocument);

router.put(`${modelName}/:id`, farmController.updateFarmById);

router.delete(`${modelName}/:id`, farmController.deleteFarmById);

module.exports = router;