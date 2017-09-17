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
          <h2>Welcome to Service</h2>
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
    this.state = {password: '',account:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({password: event.target.password});
    this.setState({account: event.target.account});
  }
  handleSubmit(event) {
    if(this.state.password=='123'&&this.state.account=='123'){
      // this.result='登入成功'
      this.transitionTo('/Content');
    }
    else{
      this.result='登入失敗'
      event.preventDefault();
    }
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.account} onChange={this.handleChange} /><br />
          <input type="password" value={this.state.password} onChange={this.handleChange} /><br />
          <input type="submit" value="login" />
          <input type="button" value="regist" onClick={this.transitionTo('/regist')} /><br />
           {this.result}
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
        <input type="button" value="logout" onClick={this.transitionTo('/')} />
      </div>  
    );
  }
}

export class Regist extends Component {
  constructor(props) {
    super(props);
    this.state = {password: '',account:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({password: event.target.password});
    this.setState({account: event.target.account});
  }
  handleSubmit(event) {
    if(this.state.password!=''&&this.state.account!=''&&
      this.state.account!=undefined&&this.state.account!=undefined){
      // this.result='登入成功'
      this.transitionTo('/Content');
    }
    else{
      this.result='註冊失敗'
      event.preventDefault();
    }
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.account} onChange={this.handleChange} /><br />
          <input type="password" value={this.state.password} onChange={this.handleChange} /><br />
          <input type="submit" value="login" />
          <input type="button" value="regist" onClick={this.transitionTo('/regist')} /><br />
           {this.result}
        </form>
    );
  }
}


// export const App {}
// export const Login {}