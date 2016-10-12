function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

function domainName(url){
    var temp = [];
    temp = url.split('.');
    if(temp[0].indexOf('www') > -1){return temp[1]}
    else if(temp[0].indexOf('http://') > -1 || temp[0].indexOf('https://') > -1 && temp[0].indexOf('www') == -1){
        return temp[0].substring(url.indexOf('//')+2, temp[0].length)
    }
    else if(temp[0].indexOf('http://') > -1 && temp[0].indexOf('www') > -1 || temp[0].indexOf('https://') >-1 && temp[0].indexOf('www') > -1){ return temp[1]}
    else if(temp[0].indexOf('http://') == -1 || temp[0].indexOf('https://') == -1 && temp[0].indexOf('www') == -1){return temp[0]}
    else return ''
}
