
import { connect } from 'react-redux';
import NavBar from './NavBar';

const mapStateToProps = state => {
  return {
    friends: state.navbarPage.friends,
  }
}
const mapDispatchToProps = dispacth => {
  return {

  }
}


const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
