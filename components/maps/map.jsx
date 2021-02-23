import React, {useEffect, useState, useLayoutEffect} from 'react';
import {MAPI} from '../../config/keys'
import {connect} from 'react-redux'
// import { Map, Marker, GoogleApiWrapper } from  'google-maps-react'
import GoogleMapReact from 'google-map-react'



const GoogleMap = props => {
let defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


    return (
        <div id="map">
           <GoogleMapReact
          bootstrapURLKeys={{ key: MAPI}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          
        </GoogleMapReact>
        </div>
    );
}


const mSTP = state => ({
    testState : "poop"
})

const mDTP = dispatch => ({

})




export default (connect(mSTP, mDTP)(GoogleMap));