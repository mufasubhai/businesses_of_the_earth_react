import React, {useEffect, useState, useLayoutEffect} from 'react';
import {MAPI} from '../../config/keys'
import {connect} from 'react-redux'

import GoogleMapReact from 'google-map-react'
import Pin from './pin'



const GoogleMap = ({ pins }) => {
let defaultProps = {
    center: {
      lat: 34.0522,
      lng: -118.2437
    },
    zoom: 11
  };


    return (
        <div className="map-wrapper ">

        <div id="map">
          {console.log('pins')}
          {console.log(pins)}
          
           <GoogleMapReact
          bootstrapURLKeys={{ key: MAPI}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          >
          {
            
            pins.map((pin) => {

              return <Pin lat={pin.lat} lng={pin.long} text={pin.title}/>
          }) 
            
          }
        </GoogleMapReact>
        </div>
        </div>
    );
}


const mSTP = state => ({
    
})

const mDTP = dispatch => ({

})




export default connect(mSTP, mDTP)(GoogleMap);