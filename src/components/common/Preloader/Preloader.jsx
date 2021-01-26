import style from './Preloader.module.css';
import loader from '../../../assets/images/loader.gif'

function Preloader(props) {
  return (
    <div className={style.loader}>
      <img src={loader}/>
    </div>
  );
}

export default Preloader;
