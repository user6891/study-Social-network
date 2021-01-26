import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {

  if (!props.profile) return <Preloader/>

  
  return (
    <div>
      <div>
        <img src="https://html5css.ru/css/img_lights.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        <div><img src={props.profile.photos.large} alt=""/></div>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
      
      </div>
    </div>
  );
}

export default ProfileInfo;