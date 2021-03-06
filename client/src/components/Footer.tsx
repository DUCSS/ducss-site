import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faDiscord,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="d-flex justify-content-center socials">
      <ul>
        <li>
          <a href="mailto:ducss@csc.tcd.ie" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <span className="sr-only">Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/ducss.ie"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span className="sr-only">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/ducss_"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span className="sr-only">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://discord.gg/NUZGYT4" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faDiscord} />
            <span className="sr-only">Discord</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ducss" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="sr-only">Discord</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
