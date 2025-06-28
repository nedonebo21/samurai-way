import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0eb062ed-280d-4c95-bc85-37aebbf14498'
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
}
