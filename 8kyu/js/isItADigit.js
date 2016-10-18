String.prototype.digit = function() {
  return /^\d$/.test(this)
};

console.log('7'.digit());
console.log(' '.digit());
console.log(''.digit());
console.log('w'.digit());
