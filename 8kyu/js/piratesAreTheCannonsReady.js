const cannonsReady = gunners => {
  for(let i in gunners){
    if(gunners[i]==='nay'){
      return 'Shiver me timbers!'
    }
  }
  return 'Fire!'
}


const cannonsReady = (gunners) => {
  return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
}

const a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'},
    b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

cannonsReady(a)
// , 'Fire!');

cannonsReady(b)
// , 'Shiver me timbers!');
