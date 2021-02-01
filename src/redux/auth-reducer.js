import { userAuthApi } from '../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_USER_IMG = 'SET_AUTH_USER_IMG';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  avatarUrl: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return { ...state, ...action.data, isAuth: true };
    }
    case SET_AUTH_USER_IMG: {
      return { ...state, avatarUrl: action.url };
    }
    case LOGIN: {
      return { ...state, ...action.data, isAuth: true };
    }
    case LOGOUT: {
      return { ...state, ...initialState };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login },
});
export const loginAC = (userId, email) => ({
  type: LOGIN,
  data: { userId, email },
});
export const logoutAC = () => ({
  type: LOGOUT,
});
export const setAuthUserImg = (url) => ({
  type: SET_AUTH_USER_IMG,
  url,
});

export const getUserData = () => {
  return (dispatch) => {
    return userAuthApi.getUserProfileData().then((response) => {
      console.log('getUserProfileData = ', response);
      if (response.resultCode === 0) {
        const { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login));
        userAuthApi.getUserMediaData(id).then((response) => {
          dispatch(setAuthUserImg(response.photos.small));
        });
      }
    });
  };
};
export const login = (email, password, rememberMe) => {
  console.log('fff');
  return (dispatch) => {
    userAuthApi.login(email, password, rememberMe).then((response) => {
      if (response.resultCode === 0) {
        dispatch(getUserData())
        //dispatch(loginAC(response.data.userId, email));
        // userAuthApi.getUserProfileData().then((response) => {
        //   console.log('getUserProfileData = ', response);
        //   if (response.resultCode === 0) {
        //     const { id, email, login } = response.data;
        //     dispatch(setAuthUserData(id, email, login));
        //     userAuthApi.getUserMediaData(id).then((response) => {
        //       dispatch(setAuthUserImg(response.photos.small));
        //     });
        //   }
        // });
      } else {
        console.log('(response.resultCode = ', response);
      }
    });
  };
};
export const logout = () => {
  console.log('logout');
  return (dispatch) => {
    userAuthApi.logout().then((response) => {
      if (response.resultCode === 0) {
        dispatch(logoutAC());

      } else {
        console.log('(response.resultCode = ', response);
      }
    });
  };
};
