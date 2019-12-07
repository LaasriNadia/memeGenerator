import React, { Component } from 'react';
import { ReactComponent as Slide } from '../utils/slide.svg';

import html2canvas from 'html2canvas';
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

  test = e => {
    e.preventDefault();
    let object = this.refs.memeref;
    // console.log(object);
    html2canvas(object, {
      logging: true,
      letterRendering: 1,
      allowTaint: true,
      useCORS: true
    }).then(canvas => {
      var imgData = canvas.toDataURL('image/jpeg');
      console.log(imgData);
    });
  };

  render() {
    return (
      <>
        <h1 className='title'>Generate your meme</h1>

        <div className='meme_container'>
          <Slide className='memeSvg' />
          <div className='meme'>
            <img src={this.state.randomImg} alt='Meme' ref='memeref' />
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
              <button onClick={e => this.test(e)}>Download</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
