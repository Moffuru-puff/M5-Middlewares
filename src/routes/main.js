let express = require('express')
let router = express.Router()
let controller = require('../controllers/mainController')
let admin = require("../middlewares/userAdmin")

router.get('/', controller.index)
router.get('/admin',admin ,controller.admin)




module.exports = router