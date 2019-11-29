import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const myCard = props => {
  const bull = (
    <span
      className={{
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
      }}
    >
      •
    </span>
  );

  return (
    <Card className={{ minWidth: 275, boxShadow: '0 10px 10px #eee' }}>
      <CardContent>
        <Typography
          className={{ fontSize: 14 }}
          color='textSecondary'
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant='h5' component='h2'>
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography className={{ marginBottom: 12 }} color='textSecondary'>
          adjective
        </Typography>
        <Typography variant='body2' component='p'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default myCard;
