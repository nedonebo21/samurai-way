import {rerenderEntireTree} from "../render";

type UserDataType = {
    id: string
    name: string
    imgUrl: string
}
type MessageType = {
    id: string
    message: string
}
type PostType = {
    id: string
    message: string
    likes: number
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
}
export type SideBarType = {
    usersOnlineData: UsersOnlineType[]
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    sideBar: SideBarType
}

export const state: StateType = {
    profilePage: {
        postsData: [
            {id: "1", message: "Yo", likes: 12},
            {id: "2", message: "Its my social network!!!", likes: 73},
            {id: "3", message: "I hope serega pirat will be my fan", likes: 999},
        ],
        newPostText: 'Yo'
    },
    dialogsPage: {
        usersDialogsData: [
            {id: "1", name: "Pudge", imgUrl: "https://play-lh.googleusercontent.com/82HFnMT2VbR8wgl6_a17UppNiNvzmyafK0BJW4FW4h-CV4BZq2dGTisboxOYNYI5gLDe=w240-h480-rw"},
            {id: "2", name: "Morphling", imgUrl: "https://dota2.ru/img/heroes/morphling/portrait.jpg"},
            {id: "3", name: "KOTL", imgUrl: "https://preview.redd.it/ygt394pc4uz81.jpg?width=300&format=pjpg&auto=webp&s=931c83697822508002307f79ebb05da97537afa4"},
            {id: "4", name: "Viper", imgUrl: "https://dota2.ru/img/heroes/viper/portrait.jpg"},
            {id: "5", name: "Phoenix", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLL8ZVV8mtzPPZ2mR_FtYyok4o2t36qMLeWtL3Cz-r9lRKZkgukBZsQtTH2p7i-9SKhtk&usqp=CAU"},
            {id: "6", name: "Ember", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNG9-yTA20s2dFLEJamV7CilxHAIkU3Oc6HA&s"},
            {id: "7", name: "Storm", imgUrl: "https://i.ytimg.com/vi/X1oXuyG6YxI/maxresdefault.jpg"},
        ],
        messagesData: [
            {id: "1", message: "Yo"},
            {id: "2", message: "Its really your social network??"},
            {id: "3", message: "Do you like gachi cinema??"},
            {id: "4", message: "Yes."},
        ]
    },
    sideBar: {
        usersOnlineData: [
            {id: "1", name: "Pudge", isOnline: true, imgUrl: "https://play-lh.googleusercontent.com/82HFnMT2VbR8wgl6_a17UppNiNvzmyafK0BJW4FW4h-CV4BZq2dGTisboxOYNYI5gLDe=w240-h480-rw"},
            {id: "2", name: "Morphling", isOnline: true, imgUrl: "https://dota2.ru/img/heroes/morphling/portrait.jpg"},
            {id: "3", name: "KOTL", isOnline: true, imgUrl: "https://preview.redd.it/ygt394pc4uz81.jpg?width=300&format=pjpg&auto=webp&s=931c83697822508002307f79ebb05da97537afa4"},
            {id: "4", name: "Viper", isOnline: false, imgUrl: "https://dota2.ru/img/heroes/viper/portrait.jpg"},
            {id: "5", name: "Phoenix", isOnline: false, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLL8ZVV8mtzPPZ2mR_FtYyok4o2t36qMLeWtL3Cz-r9lRKZkgukBZsQtTH2p7i-9SKhtk&usqp=CAU"},
            {id: "6", name: "Ember",isOnline: true, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNG9-yTA20s2dFLEJamV7CilxHAIkU3Oc6HA&s"},
            {id: "7", name: "Storm", isOnline: false, imgUrl: "https://i.ytimg.com/vi/X1oXuyG6YxI/maxresdefault.jpg"},
        ]
    }
}

export const addPost = () => {
    const newPost: PostType = {
        id: "5",
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}