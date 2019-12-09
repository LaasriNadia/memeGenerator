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
              fill: 'black',
              cursor: 'pointer',
              position: 'relative',
              height: '35px',
              width: '35px'
            }}
          />
        </a>

        <a href='https://twitter.com/laasrinadiaa'>
          <TwitterIcon
            style={{
              fill: '#1DA1F2',
              cursor: 'pointer',
              position: 'relative',
              height: '35px',
              width: '35px'
            }}
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
