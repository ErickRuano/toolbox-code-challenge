const createEcho = require('./createEchoService')
const reverseText = require('./reverseTextService')
const checkPalindrome = require('./checkPalindromeService')

module.exports = (req, res, next) => {
  try{

    const { text } = req.query

    if(req.query.text){
      // Run services
      let echo = createEcho(text)
      echo.reversedText = reverseText(echo.text)
      echo.isPalindrome = checkPalindrome(echo.text)

      // Response
      res.status(200)
      res.json(echo)
    }else{
      res.status(400)
      res.send({
        error : 'No text'
      })
    }

  }catch(err){
    console.log(err)
    res.status(500)
    res.send({
      error : 'Internal server error'
    })
  }
}