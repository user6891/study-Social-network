import { connect } from 'react-redux';
import React from 'react';
import LoginForm from './LoginForm/LoginForm';
const {
  login,
} = require('../../redux/auth-reducer');




function Login(props) {
  const onSubmit = (data, actions) => {
    console.log(data);
    props.login(data.login, data.password, data.rememberMe);
    actions.resetForm();
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm login={props.login}/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps,{login})(Login);
