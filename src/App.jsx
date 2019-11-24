import React, { Component } from 'react';

import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div style={{ height: '600px' }} />
      </div>
    );
  }
}
