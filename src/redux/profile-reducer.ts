import {ActionsType, AddPostActionType, PostType, ProfilePageType, UpdatePostTextActionType} from "./state";

export const ProfileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: "5",
                message: state.newPostText,
                likes: 0
            }
            state.postsData.push(newPost);
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
        default:
            return state
    }
    return state
}

export const addPostAC = (): AddPostActionType => (
    {type: 'ADD-POST'}
)
export const updatePostTextAC = (text: string):UpdatePostTextActionType => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: text}
)