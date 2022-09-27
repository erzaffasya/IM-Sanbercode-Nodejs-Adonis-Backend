var express = require('express');
const EmployeeController = require('../controllers/EmployeeController')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/karyawan', EmployeeController.karyawan);
router.post('/login', EmployeeController.login);
router.post('/register', EmployeeController.register);
router.post('/karyawan/:name/siswa', EmployeeController.addSiswa)

module.exports = router;
