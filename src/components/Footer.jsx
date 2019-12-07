import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <footer>
      <p>&copy;2019</p>
      <div className='social_icons'>
        <a href='https://github.com/LaasriNadia'>
          <GitHubIcon
            style={{
              position: 'relative',
              fill: 'black',
              cursor: 'pointer'
            }}
          />
        </a>

        <a href='https://twitter.com/laasrinadiaa'>
          <TwitterIcon
            style={{
              position: 'relative',
              fill: '#1DA1F2',
              cursor: 'pointer'
            }}
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
