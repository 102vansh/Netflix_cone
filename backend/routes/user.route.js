const express = require('express')
const { registeruser, login, logout, myprofile, allusers } = require('../controllers/user.controller')
const {isauth} = require('../middleware/isauth')
const router = express.Router()
router.route('/register').post(registeruser)
router.route('/login').post(login)
router.route('/logout').get(isauth,logout)
router.route('/myprofile').get(isauth,myprofile)
router.route('/allusers').get(allusers)
module.exports = router
