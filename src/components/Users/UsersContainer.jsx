import Users from './Users.jsx';
import React from 'react';
import Preloader from '../common/Preloader/Preloader.jsx';
const { connect } = require('react-redux');
const {
  follow,
  unFollow,
  setUsers,
  setTotalCount,
  setCurrentPage,
  toggleIsFetching,
  followingToggleUpdate,
  getUsers,
} = require('../../redux/users-reducer');

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }
  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.getUsers(this.props.pageSize, p);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : ''}
        {
          <Users
            totalCount={this.props.totalCount}
            unFollow={this.props.unFollow}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            followingToggleList={this.props.followingToggleList}
            followingToggleUpdate={this.props.followingToggleUpdate}
          />
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingToggleList: state.usersPage.followingToggleList,
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setTotalCount,
  setCurrentPage,
  toggleIsFetching,
  followingToggleUpdate,
  getUsers,
})(UsersContainer);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => dispatch(followAC(userId)),
//     unFollow: (userId) => dispatch(unFollowAC(userId)),
//     setUsers: (data) => dispatch(setUsersAC(data)),
//     setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//     toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
//   };
// };
