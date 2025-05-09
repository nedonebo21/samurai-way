type UserDataType = {
    id: string
    name: string
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



export type ProfilePageType = {
    postsData: PostType[]
}
export type MessagesPageType = {
    usersDialogsData: UserDataType[]
    messagesData: MessageType[]
}



export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
}

export const state: StateType = {
    profilePage: {
        postsData: [
            {id: "1", message: "Yo", likes: 12},
            {id: "2", message: "Its my social network!!!", likes: 73},
            {id: "3", message: "I hope serega pirat will be my fan", likes: 999},
        ],
    },
    dialogsPage: {
        usersDialogsData: [
            {id: "1", name: "Pudge"},
            {id: "2", name: "Morphling"},
            {id: "3", name: "KOTL"},
            {id: "4", name: "Viper"},
            {id: "5", name: "Phoenix"},
            {id: "6", name: "Ember"},
            {id: "7", name: "Storm"},
        ],
        messagesData: [
            {id: "1", message: "Yo"},
            {id: "2", message: "Its really your social network??"},
            {id: "3", message: "Do you like gachi cinema??"},
            {id: "4", message: "Yes."},
        ]
    }
}