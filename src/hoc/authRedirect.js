import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  function RedirectComponent(props) {
    if (!props.isAuth) {
      return <Redirect to="/login" />;
    }

    return <Component {...props}/>;
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
};

