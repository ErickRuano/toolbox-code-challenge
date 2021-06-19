function reverseText (str) {
  try {
    const splitString = str.split('')
    const reverseArray = splitString.reverse()
    const joinArray = reverseArray.join('')
    return joinArray
  } catch (err) {
    console.log(typeof err)
    throw new Error('Invalid argument type')
  }
}

module.exports = reverseText
