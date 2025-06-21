export type UserDataType = {
    id: string
    name: string
    imgUrl: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostType = {
    id: string
    message: string
    likes: number
}
export type User = {
    id: number
    followed: boolean
    name: string
    status: string
    avatarUrl: string
    photos: { small: string, large: string }
    location: { city: string, country: string }
}

type UsersOnlineType = {
    id: string
    name: string
    isOnline: boolean
    imgUrl: string
}


export type ProfilePageType = {
    postsData: PostType[]
    newPostText: string
}
export type MessagesPageType = {
    usersDialogsData: UserDataType[]
    messagesData: MessageType[]
    newMessageText: string
}
export type SideBarType = {
    usersOnlineData: UsersOnlineType[]
}
export type UsersPageType = {
    users: User[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    sideBar: SideBarType
    usersPage: UsersPageType
}