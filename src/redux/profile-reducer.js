import { profileApi, userAuthApi } from "../api/api";
import store from "./redux-store";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';

const initialState = {
  posts: [
    { id: 1, message: 'hi, i am here', countLike: 20 },
    { id: 2, message: 'goodbye', countLike: 15 },
    { id: 3, message: 'good morning', countLike: 1 },
  ],
  newPostText: 'oooooooo',
  profile: null,
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

    default:
      return state;
  }
};

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const getProfileById = (id) => {
  console.log('1', "getProfileById", 'id=', id)
  return dispatch => {
    console.log('5', "getProfileById", 'id=', id)

    if (!id){
      //нужна доработка
      id = store.getState().auth.userId || 2;
    }
    profileApi.getProfileById(id).then((response) => {
      dispatch(setProfile(response));
    })
  }
}