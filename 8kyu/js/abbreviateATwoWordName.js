const abbrevName = name => {
  return `${name.match(/\b(\w)/g)}`.toUpperCase().replace(',', '.')
}

abbrevName("Sam Harris")
console.log(abbrevName("Sam Harris"));
  // , "S.H");

abbrevName("Patrick Feenan")
console.log(abbrevName("Patrick Feenan"));
  // , "P.F");

abbrevName("Evan Cole")
console.log(abbrevName("Evan Cole"));
  // , "E.C");

abbrevName("P Favuzzi")
  // , "P.F");

abbrevName("David Mendieta")
  // , "D.M");
