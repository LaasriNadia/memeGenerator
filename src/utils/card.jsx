import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const myCard = props => {
  return (
    <Card
      style={{
        background: `${props.bgColor}`,
        width: '15rem',
        textAlign: 'center'
      }}
    >
      <CardContent>
        <Typography>{props.info.title}</Typography>

        <Typography variant='body2' component='p'>
          {props.info.action}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default myCard;
