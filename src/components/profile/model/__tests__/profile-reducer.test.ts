import {addPostAC, profileReducer} from "../profile-reducer";
import {ProfilePageType} from "../../../../shared/types";

let initialState: ProfilePageType = {
  postsData: [
    {id: "1", message: "Yo", likes: 12},
    {id: "2", message: "Its my social network!!!", likes: 73},
    {id: "3", message: "I hope serega pirat will be my fan", likes: 999},
  ],
  profile: {
    aboutMe: '',
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null
    },
    fullName: '',
    lookingForAJob: true,
    lookingForAJobDescription: '',
    photos: {
      large: null,
      small: null,
    },
    userId: 32493,
  },
  status: '',
}

it('new post should be added', () => {
  let action = addPostAC('new post')

  let newState = profileReducer(initialState, action)

  expect(newState.postsData.length).toBe(4)
})
it('new post should be correct', () => {
  let action = addPostAC('new post')

  let newState = profileReducer(initialState, action)

  expect(newState.postsData[0].message).toBe('new post')
  expect(newState.postsData[0].likes).toBe(0)
})
