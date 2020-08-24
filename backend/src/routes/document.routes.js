const router = require('express-promise-router')();
const documentController = require('../controllers/document.controller');


router.post('/document', documentController.createDocument);

router.get('/documents', documentController.listAllDocuments);

router.get('/document/:id', documentController.findDocumentById);

router.put('/document/:id', documentController.updateDocumentById);

router.delete('/document/:id', documentController.deleteDocumentById);

module.exports = router;