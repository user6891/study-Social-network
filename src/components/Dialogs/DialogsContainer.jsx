import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/authRedirect';
import { compose } from 'redux';

// function DialogsContainer() {

//   return (
//     <StoreContext>
//       {store => {
//         const updateNewMessageText = (text) => {
//           const action = updateNewMessageTextActionCreator(text);
//           store.dispatch(action);
//         };

//         const addMessage = () => store.dispatch(addMessageActionCreator());
//         return (
//           <Dialogs
//             updateNewMessageText={updateNewMessageText}
//             addMessage={addMessage}
//             dialogs={store.getState().dialogsPage.dialogs}
//             messages={store.getState().dialogsPage.messages}
//             newMessageText={store.getState().dialogsPage.newMessageText}
//           />
//         );
//       }}
//     </StoreContext>
//   );
// }
const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addMessage: () => dispatch(addMessageActionCreator()),
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
