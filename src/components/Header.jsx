import React, { Component } from 'react';

import { ReactComponent as Logo } from '../utils/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div className='clip_path'>
        <div className='header_container'>
          <div className='left'>
            <ul>
              <li>
                <a href='/'>Home</a>{' '}
              </li>

              <li>
                <a href='/'>Memes</a>{' '}
              </li>

              <li>
                <a href='/'>About us</a>{' '}
              </li>
            </ul>

            <div className='title_container'>
              <b>Generate Your</b> <span className='ownmeme'>Own Memes</span>
              <button>
                <span>Make Memes</span>{' '}
              </button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, inventore fuga quae ipsa aut accusamus voluptas
                excepturi dicta, ipsum expedita numquam, voluptatem nisi amet
                temporibus.
              </p>
            </div>
          </div>
          <div className='container'>
            <Logo />
          </div>
        </div>
      </div>
    );
  }
}
