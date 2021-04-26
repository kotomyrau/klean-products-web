import React from 'react'
import {ContactContainer, FormContainer, FormTextArea, FormHeader, FormButton} from './contactPageElement'
import emailjs from "emailjs-com";
import "../../components/forms.css"

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
          <FormContainer>
            <form class="contact-form" onSubmit={sendEmail}>
              <h1>contact us</h1>
              <label>
                Name
                <input class="form-input" type="text" name="name" />
              </label>
              <label>
              Email
                <input class="form-input"  type="text" name="email" required='true' />
              </label> 
              <label>
                Subject
                <input class="form-input"  type="text"  name="subject" />
              </label>
              <FormTextArea>
                <textarea rows="8" name="message"></textarea>
              </FormTextArea>
              <input class="form-button" type="submit" value="Send Message" />
            </form>
          </FormContainer>
      </ContactContainer>    

      
    </>
  )
}

export default Contact
