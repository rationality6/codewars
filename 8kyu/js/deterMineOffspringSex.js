const chromosomeCheck = sperm => {
  let son = "Congratulations! You're going to have a son."
  let daughter = "Congratulations! You're going to have a daughter."
  return sperm==='XY' ? son : daughter
}

chromosomeCheck('XY')
// , "Congratulations! You're going to have a son.")

chromosomeCheck('XX')
// , "Congratulations! You're going to have a daughter.")
