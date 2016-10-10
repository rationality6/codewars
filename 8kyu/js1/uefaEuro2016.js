const uefaEuro2016 = (teams, scores) => {
  let result = scores[0] > scores[1] ? `${teams[0]} won!`
  : scores[0] < scores[1] ? `${teams[1]} won!` : `teams played draw.`
  return `At match ${teams[0]} - ${teams[1]}, ${result}`
}


console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));
// , "At match Germany - Ukraine, Germany won!");

uefaEuro2016(['Belgium', 'Italy'], [0, 2])
// , "At match Belgium - Italy, Italy won!");

uefaEuro2016(['Portugal', 'Iceland'], [1, 1])
// , "At match Portugal - Iceland, teams played draw.");
