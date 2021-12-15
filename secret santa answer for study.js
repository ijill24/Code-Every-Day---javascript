
const range = function (n) {
  const s = [];
  Array(n).fill().forEach(function (x, i) {
    this[i] = i;
  }, s);
  return s;
};
const office = ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Pam Beesley', 'Jan Levinson', 'Kevin Malone', 'Toby Flenderson', 'Angela Martin', 'Andy Bernard', 'Stanley Hudson', 'Ryan Howard', 'Kelly Kapoor'];
const a = range(office.length);
const b = a.slice();
const pairs = {};
do {
  b.sort(() => Math.random() - 0.5);
} while (b.filter((x, i) => x === a[i]).length);
office.forEach(function (x, i) {
  this[x] = office[b[i]]
}, pairs);
console.log(pairs);

