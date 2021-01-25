const { connect } = require('react-redux');
const { followAC, unFollowAC, setUsersAC } = require('../../redux/users-reducer');
const { default: Users } = require('./Users');

const mapStateToProps = state => {

    return {
        users: state.usersPage.users,
    }

}
const mapDispatchToProps = dispatch => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unFollow: (userId) => dispatch(unFollowAC(userId)),
        setUsersAC: (data) => dispatch(setUsersAC(data)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
