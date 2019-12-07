import React, { Component } from 'react';

import { ReactComponent as Logo } from '../utils/logo.svg';
import { scroller } from 'react-scroll';
export default class Header extends Component {
  scrollToElement() {
    scroller.scrollTo('memes', {
      duration: 800,
      delay: 0,
      smooth: true
    });
  }
  render() {
    return (
      <div className='Header'>
        <div className='clip_path'></div>
        <div className='header_container'>
          <div className='left'>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>

              <li>
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.scrollToElement()}
                >
                  Memes
                </a>
              </li>

              <li>
                <a href='/'>About us</a>
              </li>
            </ul>

            <div className='title_container'>
              <b>Generate Your</b> <span className='ownmeme'>Own Memes</span>
              <button onClick={() => this.scrollToElement()}>
                <span>Make Memes</span>
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
