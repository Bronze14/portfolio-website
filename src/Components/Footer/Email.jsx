import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';


const SERVICE_ID = "service_9zyqnbo";
const TEMPLATE_ID = "template_sbtcp7hh";
const USER_ID = "7WzMXTVx1R3yWNG7w";

const Email = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

return (
    <div className="email--Container">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          className='email'
          name='user_email'
          placeholder='EMAIL'
          required
          icon='mail'
          iconPosition='left'
          type="email"
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          className='name'
          name='user_name'
          placeholder='NAME'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          className='message'
          name='user_message'
          placeholder='MESSAGE'
          required
        />
        <Button type='submit' color='green'>SEND MESSAGE</Button>
      </Form>
    </div>
  );
}


export default Email