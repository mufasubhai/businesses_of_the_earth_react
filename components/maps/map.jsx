import React from 'react';
import {MAPI} from '../../config/keys'
import {connect} from 'react-redux'
import { Map, Marker, GoogleApiWrapper } from  'google-maps-react'


const GoogleMap = props => {
   const mapStyles = {
  width: '1000px',
  height: '500px',
  display: 'flex',
  position: 'relative'

    };

    return (
        <div className="map">
            {console.log(props.testState)}
            <Map
              google={props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 34.0522, lng: -118.2437}}
            />
        </div>
    );
}


const mSTP = state => ({
    testState : "poop"
})

const mDTP = dispatch => ({

})




export default (connect(mSTP, mDTP)(GoogleApiWrapper({apiKey: MAPI})(GoogleMap)))