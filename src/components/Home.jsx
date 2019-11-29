import React, { Component } from 'react';
import Layout from '../utils/Layout';
import Cards from './cards';
export default class Home extends Component {
  render() {
    return (
      <Layout>
        <div className='home_wrapper'>
          <Cards />
        </div>
      </Layout>
    );
  }
}
