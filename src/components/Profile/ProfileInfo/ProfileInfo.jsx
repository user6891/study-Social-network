import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
  return (
    <div>
      <div>
        <img src="https://html5css.ru/css/img_lights.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
}

export default ProfileInfo;