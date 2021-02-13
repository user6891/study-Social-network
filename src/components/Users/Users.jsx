import style from './Users.module.css';
import photoUser from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator';

function Users(props) {
  return (
    <div>
      <Paginator
        totalItemsCount={props.totalCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img src={u.photos.small || photoUser} className={style.usersImg} />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingToggleList.some((el) => el === u.id)}
                    onClick={() => props.unFollow(u.id)}>
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingToggleList.some((el) => el === u.id)}
                    onClick={() => props.follow(u.id)}>
                    follow
                  </button>
                )}
              </div>
            </div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;

// [
//   {
//     id: 1,
//     photoUrl: 'https://image.flaticon.com/icons/png/512/126/126486.png',
//     followed: false,
//     fullName: 'Andrew',
//     location: { city: 'Kyiv', country: 'Ukraine' },
//     status: 'cool man',
//   },
//   {
//     id: 2,
//     photoUrl: 'https://image.flaticon.com/icons/png/512/126/126486.png',
//     followed: true,
//     fullName: 'Ivan',
//     location: { city: 'Zhytomyr', country: 'Ukraine' },
//     status: 'big man',
//   },
//   {
//     id: 3,
//     photoUrl: 'https://image.flaticon.com/icons/png/512/126/126486.png',
//     followed: false,
//     fullName: 'John',
//     location: { city: 'Moscow', country: 'Russia' },
//     status: 'cool man',
//   },
//   {
//     id: 4,
//     photoUrl: 'https://image.flaticon.com/icons/png/512/126/126486.png',
//     followed: true,
//     fullName: 'Petro',
//     location: { city: 'Odessa', country: 'Ukraine' },
//     status: 'partner',
//   },
// ]
