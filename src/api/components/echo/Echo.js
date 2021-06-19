module.exports = class Echo {

  constructor(text) {
    this.text = text;
    this.reversedText;
    this.isPalindrome;
  }

  setReversedText(reversedText){
    this.reversedText = reversedText;
  }

  setIsPalindrome(isPalindrome){
    this.isPalindrome = isPalindrome;
  }

};