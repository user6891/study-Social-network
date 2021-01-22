import s from './Message.module.css';

function Message(props) {
  return <div className={props.message}>{props.message}</div>;
}

export default Message;
