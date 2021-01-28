import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

function ProfileInfo(props) {

  if (!props.profile) return <Preloader/>

  
  return (
    <div>
     <ProfileStatus status={'hello status hello'}/>
      <div className={s.descriptionBlock}>
        <div><img src={props.profile.photos.large} alt=""/></div>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
      
      </div>
    </div>
  );
}

export default ProfileInfo;