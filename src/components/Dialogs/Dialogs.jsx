import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';

function Dialogs(props) {
  const dialogsElement = props.state.dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));

  const messagesElement = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  const textAreaRef = React.createRef();

  const updateNewMessageText = () => {
    const text = textAreaRef.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
      <div>
        <div>
          <textarea
            ref={textAreaRef}
            onChange={updateNewMessageText}
            value={props.state.newMessageText}
          />
        </div>
        <div>
          <button onClick={props.addMessage}>send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
