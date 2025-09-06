import axios from "axios";
import {
  FormDataProfileType
} from "../../components/profile/ui/profile-info/description/profile-status/profile-data-form/profile-data-form";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a165f137-c33c-4d63-bda0-d039ecf5f8ae'
  }
})

export const usersAPI = {
  getUsers(pageNumber: number = 1, pageSize: number = 10) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(res => res.data)
  },
  unFollowUser(userId: number) {
    return instance.delete(`follow/${userId}`)
        .then(res => res)
  },
  followUser(userId: number) {
    return instance.post(`follow/${userId}`, {})
        .then(res => res)
  },
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
  },
  saveAvatar(file: File) {
    const formData = new FormData()
    formData.append('avatar', file)

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    })
  },
  saveProfile(formData: FormDataProfileType) {
    return instance.put('profile', formData)
  }
}
export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: string | null | undefined) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}
export const securityAPI = {
  getCaptcha() {
    return instance.get('security/get-captcha-url')
  }
}
