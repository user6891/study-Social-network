import { deletePost, profileReducer } from './profile-reducer';

const state = {
  posts: [
    { id: 1, message: 'hi, i am here', countLike: 20 },
    { id: 2, message: 'goodbye', countLike: 15 },
    { id: 3, message: 'good morning', countLike: 1 },
  ],
};

it('after deleting length of messages should be decrement', () => {
  //test data
  let action = deletePost(1);
  //action
  const newState = profileReducer(state, action);
  //expectation
  expect(newState.posts.length).toBe(2);
});
