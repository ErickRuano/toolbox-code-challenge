function checkPalindrome(str) {
  try{
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false; 
      }
    }
    return true;    
  }catch(err){
    throw new Error('Invalid argument type')
  }
    
}

   module.exports = checkPalindrome