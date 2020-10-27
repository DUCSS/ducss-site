import React from 'react';

import './ContactPage.scss';

const ContactPage: React.FC = () => (
  <div className="text-center">
    <h1 className="text-ducss-dark display-4 my-4">Contact</h1>
    <hr className="w-50" />
    <li>
      <a className="text-ducss-dark" href="mailto:ducss@csc.tcd.ie">
        ducss@csc.tcd.ie
      </a>
    </li>
    <li>
      <a className="text-ducss-dark" href="https://facebook.com/ducss.ie">
        facebook.com/ducss.ie/
      </a>
    </li>
    <li>
      <a className="text-ducss-dark" href="https://instagram.com/ducss_">
        instagram.com/ducss_
      </a>
    </li>
    <li>
      <a className="text-ducss-dark" href="https://discord.gg/NUZGYT4">
        discord.gg/NUZGYT4
      </a>
    </li>
    <li>
      <a className="text-ducss-dark" href="https://twitter.com/ducss">
        twitter.com/ducss
      </a>
    </li>
  </div>
);

export default ContactPage;
