import React from 'react';
import Bounce from 'react-reveal/Bounce';

const myCard = props => {
  return (
    <Bounce delay={props.delay} duration={3000}>
      <div className='circle'>
        <span>{props.number}</span>
      </div>
    </Bounce>
  );
};

export default myCard;
