import React, { Component } from 'react';
import { ReactComponent as Slide } from '../utils/slide.svg';

import { captureMeme } from './Capture';
export default class Meme extends Component {
  state = {
    topText: '',
    bottomText: '',
    randomImg: 'http://i.imgflip.com/1bij.jpg',
    memes: []
  };

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes').then(res =>
      res.json().then(res =>
        this.setState({
          memes: res.data.memes
        })
      )
    );
  }

  handleText = (e, topOrBottom) => {
    if (topOrBottom === 'top') {
      this.setState({
        topText: e.target.value
      });
    } else {
      this.setState({
        bottomText: e.target.value
      });
    }
  };

  generatePic = e => {
    e.preventDefault();

    let i = Math.floor(Math.random() * this.state.memes.length);

    this.setState({
      randomImg: this.state.memes[i].url
    });
  };

  capture = e => {
    e.preventDefault();
    captureMeme();
  };

  render() {
    return (
      <div className='meme_container'>
        <Slide className='memeSvg' />
        <div className='meme' id='capture'>
          <img src={this.state.randomImg} alt='Meme' crossOrigin='anonymous' />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>

        <div className='form'>
          <form>
            <input
              type='text'
              placeholder='Enter the top text'
              value={this.state.topText}
              onChange={e => this.handleText(e, 'top')}
            />
            <input
              type='text'
              placeholder='Enter the bottom text'
              value={this.state.bottomText}
              onChange={e => this.handleText(e, 'bottom')}
            />
            <button onClick={e => this.generatePic(e)}>
              Choose another picture
            </button>
            <button onClick={e => this.capture(e)}>Download</button>
          </form>
        </div>
      </div>
    );
  }
}
