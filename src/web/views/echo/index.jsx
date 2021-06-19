import React from 'react'
import Layout from './components/layout.jsx'

class EchoView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      echoes: []
    }
    this.pushEcho = this.pushEcho.bind(this)
  }

  pushEcho (echo) {
    const updatedEchoes = [...this.state.echoes, echo]
    this.setState({
      echoes: updatedEchoes
    })
  }

  render () {
    return (
      <div>
        <Layout pushEcho={this.pushEcho} echoes={this.state.echoes} />
      </div>
    )
  }
}

export default EchoView
