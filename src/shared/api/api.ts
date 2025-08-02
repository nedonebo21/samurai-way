import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'xxx'
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
  // getProfile(userId: number) {
  //   console.warn('Use profileAPI object')
  //   return profileAPI.getProfile(userId)
  // }
}
export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status})
  }
}
export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}
