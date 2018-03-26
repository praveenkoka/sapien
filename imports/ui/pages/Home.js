import React, { Component } from 'react';
import {Spin} from 'antd';
import { Redirect } from 'react-router-dom';
 
// Task component - represents a single todo item
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      ready: false
    }
  }
    
  componentDidMount() {
    setTimeout(()=> {
      this.setState({
        ready: true
      })
    }, 3000);
  }
  
  render() {
      
    let content = <Spin size="large" tip="Redirecting ..."/>;
    if(this.state.ready == true) {
      content = <Redirect to="/posts"/>
    }
    
    return content;
  }
}