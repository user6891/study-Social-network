import React from 'react';
import MyPosts from './MyPosts';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

// function MyPostsContainer() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const updateNewPostText = (text) => {
//           const action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };

//         const addPost = () => store.dispatch(addPostActionCreator());
//         return (
//           <MyPosts
//             addPost={addPost}
//             updateNewPostText={updateNewPostText}
//             posts={store.getState().profilePage.posts}
//             newPostText={store.getState().profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
