const express = require('express');
const router = express.Router();

const IndexController = require('../controller/indexController')

router.get('/' , IndexController.getIndex)
router.post('/' , IndexController.postIndex)




module.exports = router;
