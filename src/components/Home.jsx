import React, { Component } from 'react';
import Layout from '../utils/Layout';
import StepsContainer from './steps';
import Meme from './Meme';
//

import { Element } from 'react-scroll';
export default class Home extends Component {
  render() {
    return (
      <Layout>
        <StepsContainer />
        <Element name='memes' style={{ height: 'auto', position: 'relative' }}>
          <Meme />
        </Element>
      </Layout>
    );
  }
}
