const bonusTime = (s,b) => b ? `£${s*10}` : `£${s}`

function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
