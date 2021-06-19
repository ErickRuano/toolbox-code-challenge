import React from 'react'
import Header from './header.jsx'
import Results from './results.jsx'
// import styles from './layout.module.css'

class EchoLayout extends React.Component {
  render () {
    return (
      <div>
        <div className='header'>
          <Header pushEcho={this.props.pushEcho} />
        </div>
        <div className='content'>
          <Results echoes={this.props.echoes} />
        </div>
      </div>
    )
  }
}

export default EchoLayout
