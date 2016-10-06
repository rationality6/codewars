const mouthSize = animal => {
  return animal.toLowerCase().includes('alligator') ? 'small' : 'wide'
}


mouthSize("toucan")
console.log(mouthSize("alligator"));
// ,"wide")
mouthSize("ant bear")
// ,"wide")
mouthSize("alligator")
// ,"small")
