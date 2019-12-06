import React, { Component } from 'react';
import Layout from '../utils/Layout';
import Cards from './cards';
import Meme from './Meme';
import { ReactComponent as Steps } from '../utils/steps.svg';

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <div className='home_wrapper'>
          <div className='steps_container'>
            <Steps />
            <Cards />
            <Meme />
          </div>
        </div>
      </Layout>
    );
  }
}
