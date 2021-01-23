import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

function MyPosts(props) {
  const postsElements = props.state.posts.map((p) => (
    <Post message={p.message} countLike={p.countLike} />
  ));

  const newPostElement = React.createRef();

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText}/>
        </div>
        <div>
          <button onClick={ props.addPost }>создать пост</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}
export default MyPosts;
