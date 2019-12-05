import React, { Component } from 'react';
import Card from '../utils/card';

export default class cards extends Component {
  state = {
    cards: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ]
  };

  render() {
    return (
      <div className='cards'>
        {this.state.cards.map((card, i) => (
          <Card key={card.id} number={card.id} delay={900 * i} />
        ))}
      </div>
    );
  }
}
