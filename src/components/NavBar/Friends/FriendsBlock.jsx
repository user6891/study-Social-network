import Friend from './Friend/Friend';
import s from './FriendsBlock.module.css';

function FriendsBlock(props) {
    const friendsElements = props.state.map((f) => <Friend state={f}/>);

    return <div className={s.wrapper}>{friendsElements}</div>
}

export default FriendsBlock;