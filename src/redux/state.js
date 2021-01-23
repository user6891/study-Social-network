import rerenderEntireTree from '../render';

const state = {
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Petro' },
      { id: 2, name: 'Ivan' },
      { id: 3, name: 'Eva' },
      { id: 4, name: 'Dmytro' },
      { id: 5, name: 'Ira' },
      { id: 6, name: 'Oleg' },
    ],
    messages: [
      { id: 1, message: 'HEllo' },
      { id: 2, message: 'how are you?' },
      { id: 3, message: 'welcome to me' },
      { id: 4, message: 'good bye' },
      { id: 5, message: 'who is she?' },
      { id: 6, message: 'what???/' },
    ],
    newMessageText: 'write message here',
  },
  profilePage: {
    posts: [
      { id: 1, message: 'hi, i am here', countLike: 20 },
      { id: 2, message: 'goodbye', countLike: 15 },
      { id: 3, message: 'good morning', countLike: 1 },
    ],
    newPostText: 'oooooooo',
  },
  navbarPage: {
    friends: [
      {
        id: 1,
        img:
          'https://cdn.dribbble.com/users/5547197/screenshots/14248889/20200922_201013_4x.jpg',
        name: 'Petro',
      },
      {
        id: 2,
        img:
          'https://image.freepik.com/free-vector/pro-gamer-avatar-logo_71220-49.jpg',
        name: 'Invan',
      },
      {
        id: 3,
        img: 'https://cdn141.picsart.com/275574803034201.jpg',
        name: 'Vlad',
      },
    ],
  },
};

export const addPost = () => {
  const id = state.profilePage.posts[state.profilePage.posts.length - 1].id;

  const newPost = {
    id: id + 1,
    message: state.profilePage.newPostText,
    countLike: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (text) => {
  state.profilePage.newPostText = text;
  rerenderEntireTree(state);
};

export const addMessage = () => {
  const id = state.dialogsPage.messages[state.profilePage.posts.length - 1].id;

  const newMessage = {
    id: id + 1,
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};

export const updateNewMessageText = (text) => {
  state.dialogsPage.newMessageText = text;
  rerenderEntireTree(state);
};



export default state;
