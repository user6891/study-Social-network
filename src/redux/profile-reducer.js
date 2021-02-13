import { profileApi, userAuthApi } from "../api/api";
import store from "./redux-store";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    { id: 1, message: 'hi, i am here', countLike: 20 },
    { id: 2, message: 'goodbye', countLike: 15 },
    { id: 3, message: 'good morning', countLike: 1 },
  ],
  newPostText: 'oooooooo',
  profile: null,
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const id = state.posts[state.posts.length - 1].id;
      const newPost = {
        id: id + 1,
        message: state.newPostText,
        countLike: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.text, };
    }
    case SET_PROFILE: {
      return { ...state, profile: action.profile, };
    }
    case SET_STATUS: {
      return { ...state, status: action.status, };
    }
    case DELETE_POST: {
      return { ...state, posts: state.posts.filter(e => (e.id !== action.id)), };
    }
    

    default:
      return state;
  }
};

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const deletePost = (id) => ({
  type: DELETE_POST,
  id,
});

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const getProfileById = (id) => {
  return dispatch => {

    if (!id){
      //нужна доработка
      id = store.getState().auth.userId || 2;
    }
    profileApi.getProfileById(id).then((response) => {
      dispatch(setProfile(response));
    })
  }
}
export const getProfileStatusById = (id) => {
  return dispatch => {

    if (!id){
      //нужна доработка
      id = store.getState().auth.userId || 2;
    }
    profileApi.getProfileStatusById(id).then((response) => {
      dispatch(setStatus(response.data));
    })
  }
}
export const setProfileStatus = (status) => {
  return dispatch => {
    userAuthApi.setProfileStatus(status).then((response) => {
      if (response === 0) {
        dispatch(setStatus(status));
      }
    })
  }
}
