import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
//npm install react-router-dom
// class View extends Component {
//    constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <App><content><Login /></content></App>
//     );
//   }
// }
// export default View;

export class App extends Component {
   constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          {this.props.children}
        </p>
      </div>
    );
  }
}
// <Dashboard>{this.props.children}</Dashboard>

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {pwd: '',account:'',result:'登入'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.pwd=='123'&&this.state.account=='123'){
      // this.result='登入成功'
      console.log('登入成功')
      this.transitionTo('/content');
    }
    else{
      console.log(this.state.pwd)
      console.log(this.state.account)
      this.setState({result: '登入失敗'});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method='post'>
        <h5>{this.state.result}</h5>
        <label>
          <input type="text" name="account" value={this.state.account} onChange={this.handleChange} />
        </label>
        <label>  
          <input type="password" name="pwd" value={this.state.pwd} onChange={this.handleChange} />
        </label>
        <p>
        <input type="submit" value="Submit" />
        <input type="button" value="Regist" />
        </p>
      </form>
    );
  }
}

export class Content extends Component {
  render() {
    return (
      <div>
        登入成功
        <br />
        <input type="button" value="logout"  />
      </div>  
    );
  }
}

export class Regist extends Component {
  constructor(props) {
    super(props);
    this.state = {pwd: '',account:'',result:'註冊'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.password=='123'&&this.state.account=='123'){
      // this.result='登入成功'
      this.transitionTo('/content');
    }
    else{
      this.setState({result: '註冊失敗'});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" name="account" value={this.state.account} onChange={this.handleChange} />
          <input type="password" name="pwd" value={this.state.pwd} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


// export const App {}
// export const Login {}