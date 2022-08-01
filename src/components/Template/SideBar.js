import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/profileImage.png`} alt="" />
      </Link>
      <header>
        <h2>Naushad Ali</h2>
        <p>
          <a href="mailto:naushadali2403@gmail.com">naushadali2403@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Naushad. I like building things. I am a{" "}
        <a href="https://puchd.ac.in//">Panjab university</a> graduate in
        Computer science and engineering. I am a software engineer at
        <a href="https://www.mobileprogramming.com/"> Mobile programming</a>.
        Before Mobile programming I was at{" "}
        <a href="https://www.chicmic.in/">chicmic</a>,{" "}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Naushad Ali <Link to="/">naushad.pro</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
