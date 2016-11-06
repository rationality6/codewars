const leo = oscar => {
  if(88===oscar){
    return 'Leo finally won the oscar! Leo is happy'
  } else if (86===oscar) {
    return 'Not even for Wolf of wallstreet?!'
  } else if (88<oscar){
    return 'Leo got one already!'
  }else{
    return 'When will you give Leo an Oscar?'
  }
}


const leo = (oscar) => {
  return oscar === 88 ? 'Leo finally won the oscar! Leo is happy' :
         oscar === 86 ? 'Not even for Wolf of wallstreet?!'       :
         oscar  <  88 ? 'When will you give Leo an Oscar?'        :
         'Leo got one already!';
};


console.log(leo(88));
// ,"Leo finally won the oscar! Leo is happy")
