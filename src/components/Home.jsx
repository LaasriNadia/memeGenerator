import React, { Component } from 'react';
import Layout from '../utils/Layout';
import Cards from './cards';

import { ReactComponent as Steps } from '../utils/steps.svg';

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <div className='home_wrapper'>
          <div className='steps_container'>
            <Steps />
          </div>
          {/* <Cards /> */}
        </div>
      </Layout>
    );
  }
}
