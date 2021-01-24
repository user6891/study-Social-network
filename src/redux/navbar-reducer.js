const initialState = {
  friends: [
    {
      id: 1,
      img:
        'https://cdn.dribbble.com/users/5547197/screenshots/14248889/20200922_201013_4x.jpg',
      name: 'Petro',
    },
    {
      id: 2,
      img:
        'https://image.freepik.com/free-vector/pro-gamer-avatar-logo_71220-49.jpg',
      name: 'Invan',
    },
    {
      id: 3,
      img: 'https://cdn141.picsart.com/275574803034201.jpg',
      name: 'Vlad',
    },
  ],
};
export const navbarReducer = (state=initialState, action) => state;
