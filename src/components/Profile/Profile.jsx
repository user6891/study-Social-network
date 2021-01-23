import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  
  return (
    <div>
      <ProfileInfo/>
      <MyPosts state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
  );
}
export default Profile;
