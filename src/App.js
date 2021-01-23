import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar state={props.state.navbarPage}/>
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage}/>} />
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
          <Route path='/settings' render={Settings} />
          <Route path='/music' render={Music} />
          <Route path='/news' render={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
