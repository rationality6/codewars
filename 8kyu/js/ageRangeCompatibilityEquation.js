const datingRange = age => {
  if(age <= 14){
    return `${~~(age - 0.10 * age)}-${~~(age + 0.10 * age)}`
  } else {
    return `${~~(age / 2 + 7)}-${~~((age - 7) * 2)}`
  }
}


console.log(datingRange(17));
// , "15-20")

// datingRange(40)
// , "27-66")

// datingRange(15)
// , "14-16")

// datingRange(35)
// , "24-56")

// datingRange(10)
// , "9-11")
