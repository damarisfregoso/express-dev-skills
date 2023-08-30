const skills = [
  {id:'001', skill:'Command Line', complete: true},
  {id:'002', skill:'HTML', complete: true},
  {id:'003', skill:'CSS', complete: true},
  {id:'004', skill:'JavaScript', complete: true},
  {id:'005', skill:'Python', complete: false},
  {id:'006', skill:'Java', complete: false},
  {id:'007', skill:'C#', complete: false},
  {id:'008', skill:'jQuery', complete: true},
  {id:'009', skill:'Node.js', complete: true},
  {id:'010', skill:'Ruby', complete: false}
];

module.exports = {
  getAll
};

function getAll() {
  return skills; 
}