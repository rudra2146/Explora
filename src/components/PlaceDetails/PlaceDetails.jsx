import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhopneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'
const PlaceDetails = ({place}) => {
  const classes = useStyles();
  return (
    <div>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
          }
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1" className={classes.price}>
            Price
          </Typography>
          <Typography variant="subtitle1" className={`${classes.price} ${classes.price_right}`}>
            {place.price_level}
          </Typography>
        </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" className={classes.price} >
              Ranking
            </Typography>
            <Typography variant="subtitle1" className={`${classes.price} ${classes.price_right}`}>
              {place.ranking}
            </Typography>
            </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default PlaceDetails