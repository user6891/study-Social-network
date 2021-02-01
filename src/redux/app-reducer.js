import { getUserData } from './auth-reducer';

const INITIALIZED = 'INITIALIZED';

const initialState = {
  initializedSuccess: false,
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED:
      return { ...state, initializedSuccess: true };
    default:
      return state;
  }
};

export const setInitializedSuccess = () => ({
  type: INITIALIZED,
});


  

export const initialized = () => {
  return (dispatch) => {
    dispatch(getUserData()).then(() => {
        dispatch(setInitializedSuccess());
    });
  };
};
