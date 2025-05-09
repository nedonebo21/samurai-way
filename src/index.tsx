import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

export type DataType = {
    messagesData: MessageType[]
    usersDialogsData: UserDataType[]
    postsData: PostType[]
}

export type DialogsDataType = {
    messagesData: MessageType[]
    usersDialogsData: UserDataType[]
}
export type PostsDataType = {
    postsData: PostType[]
}

type UserDataType = {
    id: string
    name: string
}
const usersDialogsData: UserDataType[] = [
    {id: "1", name: "Pudge"},
    {id: "2", name: "Morphling"},
    {id: "3", name: "KOTL"},
    {id: "4", name: "Viper"},
    {id: "5", name: "Phoenix"},
    {id: "6", name: "Ember"},
    {id: "7", name: "Storm"},
]

type MessageType = {
    id: string
    message: string
}
const messagesData: MessageType[] = [
    {id: "1", message: "Yo"},
    {id: "2", message: "Its really your social network??"},
    {id: "3", message: "Do you like gachi cinema??"},
    {id: "4", message: "Yes."},
]

type PostType = {
    id: string
    message: string
    likes: number
}
const postsData: PostType[] = [
    {id: "1", message: "Yo", likes: 12},
    {id: "2", message: "Its my social network!!!", likes: 73},
    {id: "3", message: "I hope serega pirat will be my fan", likes: 999},
]

ReactDOM.render(
    <App
        usersDialogsData={usersDialogsData}
        messagesData={messagesData}
        postsData={postsData}
    />,
    document.getElementById('root')
);