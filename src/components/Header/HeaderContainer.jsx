import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getUserData, logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  
  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    avatarUrl: state.auth.avatarUrl,
  };
};

export default connect(mapStateToProps, {getUserData,logout})(HeaderContainer);
