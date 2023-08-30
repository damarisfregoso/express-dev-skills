const express = require('express');
const router = express.Router();
//Require the controller that exports skills CRUD functions
const skillsCtrl = require('../controllers/skills');

//All actual paths start with '/skills'

//Get /skills
router.get('/', skillsCtrl.index);
//GET /todo/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
