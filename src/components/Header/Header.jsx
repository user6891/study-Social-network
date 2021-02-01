import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import userAvatar from '../../assets/images/user.png';

function Header(props) {
  return (
    <header className={s.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png"></img>
      <div className={s.login}>
        {props.isAuth ? <div>{props.login} <button onClick={props.logout}>logout</button></div>  : <NavLink to="/login">Login</NavLink>}
        {props.avatarUrl ? (
          <div>
            <img className={s.userAvatar} src="props.avatarUrl" alt="" />
          </div>
        ) : (
          <div>
            <img src={userAvatar} className={s.userAvatar} alt="" />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
