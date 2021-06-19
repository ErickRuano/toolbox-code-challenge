function checkPalindrome (str) {
  try {
    const re = /[^A-Za-z0-9]/g
    str = str.toLowerCase().replace(re, '')
    const len = str.length
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false
      }
    }
    return true
  } catch (err) {
    throw new Error('Invalid argument type')
  }
}

module.exports = checkPalindrome
