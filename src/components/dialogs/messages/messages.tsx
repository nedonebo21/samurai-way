import React from 'react';
import s from "../dialogs.module.css";
import {Button} from "../../../shared/ui/button/button";
import {Message} from "./message/message";
import {MessagesPageType} from "../../../shared/types/state-types";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MessagesProps = {
  messageSend: (message: string) => void
  dialogsPage: MessagesPageType
}

export const Messages = (props: MessagesProps) => {
  const {dialogsPage} = props

  const messagesList = dialogsPage.messagesData
      .map((message) => (<Message key={message.id} message={message.message}/>))
  const messagesItems = dialogsPage.messagesData.length ? messagesList
      : <p>No messages. Write smth to start dialog</p>

  const addNewMessage = (values: any) => {
    props.messageSend(values.message)
  }

  return (
      <div className={s.messages}>
        {messagesItems}
        <AddMessageReduxForm onSubmit={addNewMessage}/>
      </div>
  );
};


const AddMessageForm = (props: InjectedFormProps) => {
  return (
      <form onSubmit={props.handleSubmit} className={s.send_message}>
        <div>
          <label>
            <Field className={s.field} name={'message'} placeholder={'Type your message'} component={'input'}/>
          </label>
        </div>
        <div>
          <Button className={s.send_message_button} onClick={() => {
          }}>Send</Button>
        </div>
      </form>
  )
}
const AddMessageReduxForm = reduxForm({form: 'message'})(AddMessageForm)