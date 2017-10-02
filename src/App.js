import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
// npm install axios
//npm install react-router-dom
let hostName="http://boiling-hamlet-95378.herokuapp.com"

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

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {password: '',username:'',result:'登入'};
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
    let user = {"password":this.state.password,"username":this.state.username};
    let path = {
      pathname:'/content',
      query:'',
    }
    axios({
      method: 'post',
      url: hostName+'/api/login',
      data: user,
      headers:{"content-type":"application/json",'Access-Control-Allow-Origin': '*'}
    })
    .then((data)=> {
      console.log(data)
      if(data.token!=undefined){
          console.log('登入成功')
          // 傳直
          path.query=data;
          this.props.history.push(path)
      }else{
          this.setState({result: '登入失敗'});
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} method='post'>
        <h5>{this.state.result}</h5>
        <label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </label>
        <label>  
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
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
  constructor(props) {
    super(props);
      let data = this.props.location.query;
      this.state = data;
  }
  componentDidMount(){ this._updateState() }
  componentWillReceiveProps(){ this._updateState() }
  _updateState(){
   //  axios
   //  .get(hostName+'/users/me')
   //  .headers({authorization:this.state.token})
   //  .then(data =>{
   //    if(data!=undefined){
   //      this.props.history.push('/')
   //    }else{
   //      this.setState({username:data.username})
   //    }
   //  })
   //  .catch(function (error) {
   //   console.log(error);
   // });
  }
  render() {
    return (
      <div>
      <h5>登入成功 !! {this.state.username}</h5>
        <br />
        <input type="button" value="logout" onClick={this.props.history.push('/')} />
      </div>  
    );
  }
}

export class Regist extends Component {
  constructor(props) {
    super(props);
    this.state = {password: '',username:'',result:'註冊'};
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
    if(this.state.password=='123'&&this.state.username=='123'){
      // this.result='登入成功'
      let data = {"password":this.state.password,"user":this.state.username};
        let path = {
          pathname:'/content',
          query:data,
        }
      this.props.history.push(path);
    }
    else{
      this.setState({result: '註冊失敗'});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h5>{this.state.result}</h5>
        <label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}