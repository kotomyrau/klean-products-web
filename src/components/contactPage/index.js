import React from 'react'
import {ContactContainer, FormContainer, FormTextArea, FormButton} from './contactPageElement'
import emailjs from "emailjs-com";

const user_id = process.env.REACT_APP_EMAIL_JS_API_KEY
const service_id = process.env.REACT_APP_EMAIL_JS_SERVICE_ID
const template_id = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, user_id)
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    e.target.reset()
    }
  return (
    <>
      <ContactContainer id='contact'>
          <h1>hi</h1>
          <FormContainer>
            <form onSubmit={sendEmail}>
              <label>
                Name:
                <input type="text" placeholder="Name" name="name" />
              </label> 
              <label>
              Email:
                <input type="text" placeholder="Email" name="email" required='true' />
              </label> 
              <label>
                Subject:
                <input type="text" placeholder="Subject" name="subject" />
              </label>
              <FormTextArea>
                <textarea rows="8" placeholder="Your Message" name="message"></textarea>
              </FormTextArea>
              <input type="submit" value="Send Message" />
            </form>
          </FormContainer>
      </ContactContainer>    

      
    </>
  )
}

export default Contact
