import s from './Friend.module.css';

function Friend(props) {

    return (
        <div>
            <div><img src={props.state.img} className={s.imgFriend}/></div>
            <div>{props.state.name}</div>
        </div>
    )
}

export default Friend;
