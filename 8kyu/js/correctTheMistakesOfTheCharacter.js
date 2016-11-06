const correct = str => {
  return str.replace(/[0]/g,'O').replace(/[5]/g,'S').replace(/[1]/g,'I')
}

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

console.log(correct("L0ND0N"));
// ,"LONDON");

console.log(correct("DUBL1N"));
// ,"DUBLIN");

console.log(correct("51NGAP0RE"));
// ,"SINGAPORE");

// correct("BUDAPE5T")
// ,"BUDAPEST");

// correct("PAR15")
// ,"PARIS");
