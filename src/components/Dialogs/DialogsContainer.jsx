import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import Dialogs from './Dialogs';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';

function DialogsContainer(props) {

  const updateNewMessageText = (text) => {
    const action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  const addMessage = () => props.store.dispatch(addMessageActionCreator());

  return (
    <Dialogs
      updateNewMessageText={updateNewMessageText}
      addMessage={addMessage}
      dialogs={props.store.getState().dialogsPage.dialogs}
      messages={props.store.getState().dialogsPage.messages}
      newMessageText={props.store.getState().dialogsPage.newMessageText}
    />
  );
}

export default DialogsContainer;
