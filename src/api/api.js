import axios from 'axios';

const axInst = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '2c975824-fbc1-4e67-9784-e9e11ceffdbf',
  },
});
export const usersApi = {
  getUsers(pageSize, currentPage) {
    return axInst
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },
  follow(id) {
    return axInst.post(`follow/${id}`).then((response) => response.data);
  },
  unfollow(id) {
    return axInst.delete(`follow/${id}`).then((response) => response.data);
  },
};

export const userAuthApi = {
  getUserProfileData() {
    return axInst.get(`auth/me`).then((response) => response.data);
  },
  getUserMediaData(id) {
    return axInst.get(`profile/${id}`).then((response) => response.data);
  },
  setProfileStatus(status) {
    return axInst.put('profile/status/',{status}).then((response) => response.data.resultCode);
  },
};

export const profileApi = {
  getProfileStatusById(id) {
    return axInst.get('profile/status/' + id);
  },
  getProfileById(id) {
    return axInst
    .get(`profile/${id}`)
    .then((response) => response.data);
  },
}

