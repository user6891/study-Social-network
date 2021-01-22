import s from './MyPosts.module.css';
import Post from './Post/Post';

function Profile() {

  const posts = [
    {id: 1, message: "hi, i am here", countLike: 20,},
    {id: 2, message: "goodbye", countLike: 15,},
    {id: 3, message: "good morning", countLike: 1,},
  ]

  const postsElements = posts.map(p => <Post message={p.message} countLike={p.countLike} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>создать пост</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default Profile;
