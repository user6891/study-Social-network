import Users from './Users.jsx';
import * as axios from 'axios';
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
} = require('../../redux/users-reducer');

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  };

  render() {
    return (
      <>
        {' '}
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalCount={this.props.totalCount}
            unFollow={this.props.unFollow}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
          />
        )}
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
  };
};
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

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setTotalCount,
  setCurrentPage,
  toggleIsFetching,
})(UsersContainer);
