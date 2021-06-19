import React from 'react';
import styles from './results.module.css'

class Results extends React.Component {
    render() {
      return(
        <div className={styles.container}>
           <div className={styles.content}>
             Results:
            {this.props.echoes.reverse().map((echo, index)=>{
              return (
                <div className={styles.result}>
                    Original text: {echo.text}<br/>
                    Reversed text: {echo.reversedText}<br/>
                    Is Palindrome: {echo.isPalindrome.toString()}<br/>
                </div>
              )
            })}
            </div>
        </div>
      );
    }
  }

export default Results
