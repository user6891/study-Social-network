import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} setProfileStatus={props.setProfileStatus}/>
      <MyPostsContainer  />
    </div>
  );
}
export default Profile;