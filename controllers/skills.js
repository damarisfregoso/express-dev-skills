//Convention is to name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
  index, 
  show
}

function show(req, res) {
  //Do not use a leading slash when rendering
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id)
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}