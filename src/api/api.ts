import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '29e210e1-1969-40f0-985e-bded5f18c8d8'
  }
})

export const usersAPI = {
  getUsers(pageNumber: number = 1, pageSize: number = 10) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(res => res.data)
  },
  unFollowUser(userId: number) {
    return instance.delete(`follow/${userId}`)
        .then(res => res.data)
  },
  followUser(userId: number) {
    return instance.post(`follow/${userId}`, {})
        .then(res => res.data)
  },
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)
  }
}
export const authAPI = {
  me() {return instance.get(`auth/me`)}
}
