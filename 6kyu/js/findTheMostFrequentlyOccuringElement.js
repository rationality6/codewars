const forecast_01 = {
  "temperature": [
    [15, 17, 19, 21, 21, 21, 20, 16],
    [16, 17, 22, 22, 22, 22, 20, 16],
    [12, 17, 19, 20, 20, 20, 20, 18],
    [14, 15, 19, 19, 20, 22, 18, 17],
    [15, 17, 24, 24, 24, 20, 20, 20]
  ]
};

const getMostFrequent = obj => {
  return obj.temperature.map(objItems => {
    let mostOne = 0, result
    objItems.map(item => {
      let len = objItems.filter(a => a === item).length
      if (len >= mostOne) {
        mostOne = len
        result = item
      }
    })
    return result
  })
}

const getMostFrequent = json => {
  return json["temperature"]
    .map(arr => arr.sort(
      (a, b) => arr.filter(el => a === el).length - arr.filter(el => b === el).length)
    .pop());
}


const getMostFrequent = json => {
  return json['temperature'].map((v) =>
    v.reduce((s, e) => {
      s.r[e] = (s.r[e]||0)+1;
      if ( s.r[e] >= s.c ) {
        s.c = s.r[e]; s.max = e;
      }
      return s;
    }, {c:-Infinity, max:-Infinity, r:{}}).max)
}



console.log(getMostFrequent(forecast_01));
// [21,22,20,19,20]
