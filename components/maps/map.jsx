import React, {useEffect, useState, useLayoutEffect} from 'react';
import {MAPI} from '../../config/keys'
import {connect} from 'react-redux'
// import { Map, Marker, GoogleApiWrapper } from  'google-maps-react'
import GoogleMapReact from 'google-map-react'




const GoogleMap = props => {
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
          
          
           <GoogleMapReact
          bootstrapURLKeys={{ key: MAPI}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          >
          
        </GoogleMapReact>
        </div>
        </div>
    );
}


const mSTP = state => ({
    testState : "poop"
})

const mDTP = dispatch => ({

})




export default connect(mSTP, mDTP)(GoogleMap);