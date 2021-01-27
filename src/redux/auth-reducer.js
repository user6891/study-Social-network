import { userAuthApi } from '../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_USER_IMG = 'SET_AUTH_USER_IMG';

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

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login },
});
export const setAuthUserImg = (url) => ({
  type: SET_AUTH_USER_IMG,
  url,
});

export const getUserData = () => {
  return (dispatch) => {
    userAuthApi.getUserProfileData().then((response) => {
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
