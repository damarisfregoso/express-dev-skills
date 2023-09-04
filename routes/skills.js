const express = require('express');
const router = express.Router();
//Require the controller that exports skills CRUD functions
const skillsCtrl = require('../controllers/skills');

//All actual paths start with '/skills'

//Get /skills
router.get('/', skillsCtrl.index);
//GET /skill/new
router.get('/new', skillsCtrl.new)
//GET /skill/:id
router.get('/:id', skillsCtrl.show);
//GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// POST /skill
router.post('/', skillsCtrl.create);
//DELTE /skill/:id
router.delete('/:id', skillsCtrl.delete)
//PUT /skills/:id
router.put('/:id', skillsCtrl.update)


module.exports = router;
