var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }


const generic = a => {
  if (!a) {
    return false;
  }

  let res = a.match(/\d[*/+-]\d/);
  return res && res.length ? eval(res[0]) : false;
}

const zero = a => generic(0 + a) || 0;
const one = a => generic(1 + a) || 1;
const two = a => generic(2 + a) || 2;
const three = a => generic(3 + a) || 3;
const four = a => generic(4 + a) || 4;
const five = a => generic(5 + a) || 5;
const six = a => generic(6 + a) || 6;
const seven = a => generic(7 + a) || 7;
const eight = a => generic(8 + a) || 8;
const nine = a => generic(9 + a) || 9;

const plus = a => '+' + a;
const minus = a => '-' + a;
const times = a => '*' + a;
const dividedBy = a => '/' + a;
