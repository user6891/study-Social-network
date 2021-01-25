const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
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
};
export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.text };
    }
    case ADD_MESSAGE: {
      const id = state.messages[state.messages.length - 1].id;

      const newMessage = {
        id: id + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      };
    }

    default:
      return state;
  }
};

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text,
});
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
