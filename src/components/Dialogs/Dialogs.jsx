import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormControl/FormControl';
import { maxLength, minLength, required } from '../Common/Validators/Validators';
import DialogItem from './DialogItem/DialogItem';
import cl from './Dialogs.module.css';
import Message from './Messages/Message';



const Dialogs = (props) => {
  
  let state = props.dialogsPage;

  let dialogElems = state.dialogs.map ( d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messageElems = state.messages.map ( m => <Message message={m.message} key={m.id} />);
  let newMessageText = state.newMessageText;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText)
  };

    return  <div className={cl.dialogs}>
              <div className={cl.from}>
                {dialogElems}
              </div>
              <div className={cl.messages}>
                <div>{messageElems}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
              </div>
            </div>
};

const maxLength50 = maxLength(50);
const minLength0 = minLength(0);

const AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newMessageText" placeholder="Enter your message"
              validate={[maxLength50, minLength0]} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({form: "message"}) (AddMessageForm);

export default Dialogs;