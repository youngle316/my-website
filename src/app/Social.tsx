import React from 'react';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

function Social() {
  return (
    <div className="flex gap-2 text-stone-400 ">
      <a
        href="https://github.com/youngle316"
        target="_blank"
        className="social-svg"
      >
        <FiGithub size={16} />
      </a>
      <a
        href="https://twitter.com/youngle316"
        target="_blank"
        className="social-svg"
      >
        <FiTwitter size={16} />
      </a>
      <a
        href="mailto:youngle316@gmail.com"
        target="_blank"
        className="social-svg"
      >
        <MdOutlineEmail size={16} />
      </a>
    </div>
  );
}

export default Social;
