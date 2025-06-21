import {PostType, ProfilePageType} from "./types/state-types";
import {ActionsType, AddPostActionType, UpdatePostTextActionType} from "./types/action-types";

let initialState: ProfilePageType = {
    postsData: [
        {id: "1", message: "Yo", likes: 12},
        {id: "2", message: "Its my social network!!!", likes: 73},
        {id: "3", message: "I hope serega pirat will be my fan", likes: 999},
    ],
    newPostText: 'Yo'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: "5", message: state.newPostText, likes: 0}
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            const newPostText = action.newText
            return {...state, newPostText}
    }
    return state
}

export const addPostAC = (): AddPostActionType => (
    {type: 'ADD-POST'}
)
export const updatePostTextAC = (text: string): UpdatePostTextActionType => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: text}
)