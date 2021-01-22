import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';

function Dialogs(props) {
  const dialogs = [
    { id: 1, name: 'Petro' },
    { id: 2, name: 'Ivan' },
    { id: 3, name: 'Eva' },
    { id: 4, name: 'Dmytro' },
    { id: 5, name: 'Ira' },
    { id: 6, name: 'Oleg' },
  ];
  const messages = [
    { id: 1, message: 'HEllo' },
    { id: 2, message: 'how are you?' },
    { id: 3, message: 'welcome to me' },
    { id: 4, message: 'good bye' },
    { id: 5, message: 'who is she?' },
    { id: 6, message: 'what???/' },
  ];

  const dialogsElement = dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  const messagesElement = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
}

export default Dialogs;
