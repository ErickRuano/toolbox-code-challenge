import React from 'react'
import styles from './results.module.css'

class Results extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          Results:<br />
          {this.props.echoes.reverse().map((echo, index) => {
            return (
              <div key={index} className={styles.result} id='result-container'>
                <p id={`text-${index}`}>Original text: {echo.text}</p>
                <p>Reversed text: {echo.reversedText}</p>
                <p id={`isPalindrome-${index}`}>Is Palindrome: {echo.isPalindrome.toString()}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Results
