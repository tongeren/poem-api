const express = require('express');
const apiController= require('../controllers/api');
const router = express.Router();

router.post('/poems', apiController.postPoem);
router.get('/poems', apiController.getPoems);
router.get('/poems/:poemId', apiController.getPoem);
router.patch('/poems/:poemId', apiController.patchPoem);
router.delete('/poems/:poemId', apiController.deletePoem);

module.exports = router;

