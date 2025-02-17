import React from 'react';
import { Link } from "react-router-dom";

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Naushad Ali via email @ naushadali2403@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at:</p>
        <a href={`mailto:naushadali2403@gmail.com`}>
        <span>naushadali2403@gmail.com</span>
      </a>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
