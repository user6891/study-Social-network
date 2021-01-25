import style from './Users.module.css';
import photoUser from '../../assets/images/user.png';
import * as axios from 'axios';
import React from 'react';

class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          this.props.setUsersAC(response.data.items);
        });
    }
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => {
          return (
            <div key={u.id}>
              <div>
                <div>
                  <img
                    src={u.photos.small || photoUser}
                    className={style.usersImg}
                  />
                </div>
                <div>
                  {u.followed ? (
                    <button onClick={() => this.props.unFollow(u.id)}>
                      unfollow
                    </button>
                  ) : (
                    <button onClick={() => this.props.follow(u.id)}>follow</button>
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
