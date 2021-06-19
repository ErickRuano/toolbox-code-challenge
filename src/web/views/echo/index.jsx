import React, { useState } from 'react';
import Layout from './components/layout.jsx'


class EchoView extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        echoes : []
      }
      this.pushEcho = this.pushEcho.bind(this)
    }

    pushEcho(echo){
      let updatedEchoes = [...this.state.echoes, echo]
      this.setState({
        echoes : updatedEchoes
      })
    }

    render() {
      return(
        <div>
          <Layout pushEcho={this.pushEcho} echoes={this.state.echoes}></Layout>
        </div>
      );
    }
  }

export default EchoView