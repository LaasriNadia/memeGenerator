import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const myCard = props => {
  return (
    <Zoom delay={props.delay}>
      <div className='card'>
        <Card style={{ background: 'none', boxShadow: 'none' }}>
          <CardContent>
            <Typography>{props.info.title}</Typography>

            <Typography variant='body2' component='p'>
              {props.info.action}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Zoom>
  );
};

export default myCard;
