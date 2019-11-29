import React from 'react';

const card = props => {
  return (
    <div className='card'>
      <h1>props.title</h1>
      <h2>props.text</h2>
    </div>
  );
};
export default card;
