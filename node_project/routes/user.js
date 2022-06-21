const express = require('express');
var router = express.Router();
const userController = require('../controller/user');
router.post('/signup', userController.signup);
router.get('/getdata', userController.getdata);
router.post('/updatedata/:id', userController.updatedata);
router.delete('/deletedata/:id',userController.deletedata)

module.exports = router;
