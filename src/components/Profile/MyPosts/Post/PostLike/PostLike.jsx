import s from './PostLike.module.css';

function PostLike(props) {
  return (
    <div>
      <span className={s.like_count}>{props.count}</span>
      <span>like</span>
    </div>
  );
}
export default PostLike;
