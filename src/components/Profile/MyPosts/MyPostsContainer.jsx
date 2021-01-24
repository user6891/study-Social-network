
import React from 'react';
import MyPosts from './MyPosts';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';

function MyPostsContainer(props) {
  const updateNewPostText = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  const addPost = () => props.store.dispatch(addPostActionCreator());

  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      posts={props.store.getState().profilePage.posts}
      newPostText={props.store.getState().profilePage.newPostText}
    />
  );
}
export default MyPostsContainer;
