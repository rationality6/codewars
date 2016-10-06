const gooseFilter = birds => {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(a=>!geese.includes(a))
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
// gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
//
// gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
// ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
//
// gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])
// []);
