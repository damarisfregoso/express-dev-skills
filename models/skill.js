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
  getOne
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills; 
}