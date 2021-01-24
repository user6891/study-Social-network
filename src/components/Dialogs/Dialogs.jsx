import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';

function Dialogs(props) {
  const dialogsElement = props.dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));

  const messagesElement = props.messages.map((m) => (
    <Message message={m.message} />
  ));

  const onUpdateNewMessageText = (e) => {
    const text = e.target.value;
    props.updateNewMessageText(text);
  };

  const onAddMessage = () => {
    props.addMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
      <div>
        <div>
          <textarea
            onChange={onUpdateNewMessageText}
            value={props.newMessageText}
          />
        </div>
        <div>
          <button onClick={onAddMessage}>send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
