import s from './Profile.module.css';
import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { Redirect, withRouter } from 'react-router-dom';
import { profileApi } from '../../api/api';
import { withAuthRedirect } from '../../hoc/authRedirect';
import { compose } from 'redux';
const {
  getProfileById,
  setProfileStatus,
  getProfileStatusById,
} = require('../../redux/profile-reducer');

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    this.props.getProfileById(userId);
    this.props.getProfileStatusById(userId);

  }
  render() {
    return <Profile {...this.props} status={this.props.status} setProfileStatus={this.props.setProfileStatus}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfileById,
    setProfileStatus,
    getProfileStatusById,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
