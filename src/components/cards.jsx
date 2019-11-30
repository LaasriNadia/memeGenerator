import React, { Component } from 'react';
import Card from '../utils/card';

export default class cards extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: 'Picture',
        action: 'Choose a meme picture',
        bgColor: 'rgba(93, 187, 152, 1)'
      },
      {
        id: 2,
        title: 'Text',
        action: 'Add text to it',
        bgColor: 'rgba(191, 202, 210, 1)'
      },
      {
        id: 3,
        title: 'Upload',
        action: 'Your meme is ready to use',
        bgColor: 'rgb(255, 173, 189)'
      }
    ]
  };

  render() {
    return (
      <div className='cards'>
        {this.state.cards.map(card => (
          <Card key={card.id} info={card} bgColor={card.bgColor} />
        ))}
      </div>
    );
  }
}
