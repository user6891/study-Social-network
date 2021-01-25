import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


function MyPosts(props) {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} countLike={p.countLike} />
  ));

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPostText(text);
  };

  const onAddPost = () => {
    props.addPost();
  };

  return (

    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>создать пост</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}
export default MyPosts;
