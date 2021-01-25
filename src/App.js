import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBarContainer />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/settings" render={Settings} />
          <Route path="/music" render={Music} />
          <Route path="/news" render={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
