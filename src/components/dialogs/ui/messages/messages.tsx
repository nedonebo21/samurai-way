import React from 'react';
import s from "../dialogs.module.css";
import {Button} from "../../../../shared/ui/button/button";
import {Message} from "./message/message";
import {MessagesPageType} from "../../../../shared/types";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../../shared/ui/textarea/textarea";
import {maxLengthCreator, required} from "../../../../shared/utils";

type MessagesProps = {
  messageSend: (message: string) => void
  dialogsPage: MessagesPageType
}

type NewMessageFormDataType = {
  message: string
}

export const Messages = (props: MessagesProps) => {
  const {dialogsPage} = props

  const messagesList = dialogsPage.messagesData
      .map((message) => (<Message key={message.id} message={message.message}/>))
  const messagesItems = dialogsPage.messagesData.length ? messagesList
      : <p>No messages. Write smth to start dialog</p>

  const addNewMessage = (values: NewMessageFormDataType) => {
    props.messageSend(values.message)
  }

  return (
      <div className={s.messages}>
        {messagesItems}
        <AddMessageReduxForm onSubmit={addNewMessage}/>
      </div>
  )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormDataType>> = (props) => {
  return (
      <form onSubmit={props.handleSubmit} className={s.send_message}>
        <div>
          <label>
            <Field validate={[required, maxLength50]}
                   name={'message'} placeholder={'Type your message'} component={Textarea}/>
          </label>
        </div>
        <div>
          <Button className={s.send_message_button} onClick={() => {
          }}>Send</Button>
        </div>
      </form>
  )
}
const AddMessageReduxForm = reduxForm<NewMessageFormDataType>({form: 'message'})(AddMessageForm)