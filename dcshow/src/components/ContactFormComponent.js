import React, { Component } from 'react';

import './css/standard.css'
import './css/contactForm.css'

class ContactForm extends Component {






  render() {
    return (

      <div className="contact">
    <form >
    <div className="col-4">
    <div className="contactField">
    <label for="name">First and Last Name</label>
    <input type="text" id="fname" name="name" placeholder="Your full name.."/>
    </div>
    <div className="contactField">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your email.."/>

    </div>


    <div className="contactField">
    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    </div>
    <div className="row">
    <input type="submit" value="Submit"/>

    </div>

    </div>
    <div className="col-5">
    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Write something.."></textarea>
    </div>

  </form>



    </div>

    );
  }
}
export default ContactForm;
