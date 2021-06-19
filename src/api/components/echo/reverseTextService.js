function reverseText(str) {
    try{
      var splitString = str.split("");
      var reverseArray = splitString.reverse();
      var joinArray = reverseArray.join("");
      return joinArray;
    }catch(err){
      console.log(typeof err)
      throw new Error('Invalid argument type')
    }
  }

  module.exports = reverseText