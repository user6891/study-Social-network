import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBarContainer />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/settings" render={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/music" render={Music} />
          <Route path="/news" render={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
