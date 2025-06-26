import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles'
const Map = ({setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  return (
    <div>
      <div className={classes.mapContainer}>
        <GoogleMapReact
                    key={`${coordinates.lat}-${coordinates.lng}`} 
                    bootstrapURLKeys={{key:'AIzaSyBhOs7sh-zWBeE1E_2fdpCHtR9hoP-4EQY'}}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50,50,50,50]}
                    options={''}
                    onChange={(e)=>{
                      setCoordinates({ lat:e.center.lat, lng:e.center.lng })
                      setBounds({ ne:e.marginBounds.ne, sw:e.marginBounds.sw })
                    }}
                    onChildClick={''}
                    >

        </GoogleMapReact>
      </div>      
    </div>
  )
}

export default Map