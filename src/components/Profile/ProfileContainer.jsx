import s from './Profile.module.css';
import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { profileApi } from '../../api/api';
const { getProfileById } = require('../../redux/profile-reducer');

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    console.log('3', "componentDidMount", 'id=', userId)

    this.props.getProfileById(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getProfileById })(WithUrlDataContainerComponent);
