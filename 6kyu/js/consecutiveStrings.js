const longestConsec = (strarr, k) => {
  let longest = "";
  for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
    let tempArray = strarr.slice(i, i + k);
    // console.log(tempArray);
    let tempStr = tempArray.join("");
    // console.log(tempStr);
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}

function longestConsec(strarr, k) {
  if( strarr.length==0 || k> strarr.length || k <1 ) return "";
  let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
      i = lens.indexOf( Math.max(...lens) );
  return strarr.slice(i,i+k).join('')
}

console.log(longestConsec(['ei', 'weofowiejf', 'ef'], 2));
