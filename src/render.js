
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state'

const rerenderEntireTree = state => {
    
    ReactDOM.render(
        <BrowserRouter>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addMessage={addMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
      );
}

export default rerenderEntireTree;