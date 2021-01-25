const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users:[],
  totalCount: 0,
  pageSize: 5,
  
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.followed === false && el.id === action.userId) el.followed = true;
          return el;
        }),
      };
    case UNFOLLOW:
      return{
        ...state,
        users: state.users.map((el) => {
          if (el.followed === true && el.id === action.userId) el.followed = false;
          return el;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.data]
      };

    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (data) => ({type: SET_USERS, data});
