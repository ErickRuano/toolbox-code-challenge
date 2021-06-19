import React from 'react';
import styles from './header.module.css';
import { Button } from 'react-bootstrap'
import sendEcho from './../services/sendEcho';

class Header extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        text : ""
      }
      this.handleTextChange = this.handleTextChange.bind(this)
      this.handleTextSubmit = this.handleTextSubmit.bind(this)
    }

    handleTextChange(event){
      this.setState({ text : event.target.value });
    }

    handleTextSubmit(event){
      sendEcho(this.state.text)
      .then((echo)=>{
        this.props.pushEcho(echo)
      })
      event.preventDefault();
    }

    render() {
      return(
        <div className={styles.header}>
            <input className={styles.input} type="text" value={this.state.value} onChange={this.handleTextChange}></input>
            <Button  onClick={this.handleTextSubmit}>Send</Button>
        </div>
      );
    }
  }

export default Header