const skills = [
  {id: 1234, skill:'Command Line', complete: true},
  {id: 1222, skill:'HTML', complete: true},
  {id: 1254, skill:'CSS', complete: true},
  {id: 1244, skill:'JavaScript', complete: true},
  {id: 1252, skill:'Python', complete: false},
  {id: 1266, skill:'Java', complete: false},
  {id: 1276, skill:'C#', complete: false},
  {id: 1289, skill:'jQuery', complete: true},
  {id: 1292, skill:'Node.js', complete: true},
  {id: 1201, skill:'Ruby', complete: false}
];

module.exports = {
  getAll,
  getOne, 
  create, 
  deleteOne,
  update
};

function update(id, updatedSkill){
  id = parseInt(id);
  const skill =  skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  //All properties attached to req.params are strings
  id = parseInt(id);
  //Find the index based on the id of the skill object
  const idx = skills.findIndex(skill => skill.id === id); 
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000;
  skill.complete = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills; 
}