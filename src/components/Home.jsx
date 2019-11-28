import React, { Component } from 'react';
import Layout from '../utils/Layout';
import Card from '../utils/card';
export default class Home extends Component {
  state = {
    cards: [
      {
        title: 'Picture',
        action: 'Choose a meme picture'
      },
      {
        title: 'Text',
        action: 'Add text to it'
      },
      {
        title: 'Upload',
        action: 'Your meme is ready to use'
      }
    ]
  };

  displayCards = () => {
    this.state.cards.map(card => <Card />);
  };

  render() {
    return (
      <Layout>
        <div className='home_wrapper'>
          {' '}
          {this.displayCards()}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nostrum
          deserunt eligendi nemo hic iure quae labore exercitationem minima
          beatae.
        </div>
      </Layout>
    );
  }
}
