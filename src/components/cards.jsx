import React, { Component } from 'react';
import Card from '../utils/card';

export default class cards extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: 'Picture',
        action: 'Choose a meme picture'
      },
      {
        id: 2,
        title: 'Text',
        action: 'Add text to it'
      },
      {
        id: 3,
        title: 'Upload',
        action: 'Your meme is ready to use'
      }
    ]
  };

  render() {
    return (
      <div className='cards'>
        {this.state.cards.map(card => (
          <Card key={card.id} info={card} />
        ))}
        ;
      </div>
    );
  }
}
