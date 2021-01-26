import style from './Users.module.css';
import photoUser from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

function Users(props) {
  const countPages = Math.ceil(props.totalCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= countPages; i++) pages.push(i);

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              onClick={() => props.onPageChanged(p)}
              className={props.currentPage === p && style.activePage}
            >
              {' ' + p + ' '}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <div>
                <NavLink to={"/profile/2"}><img
                  src={u.photos.small || photoUser}
                  className={style.usersImg}
                /></NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => props.unFollow(u.id)}>unfollow</button>
                ) : (
                  <button onClick={() => props.follow(u.id)}>follow</button>
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
