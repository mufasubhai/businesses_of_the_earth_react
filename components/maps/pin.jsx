import React from 'react'
import {Link} from'react-router-dom';


const Pin = ({ lat, long, text, id }) => {

    return (
        <span>
            <div className="map-pin ">

                <Link to={`/posts/${id}`} className="map-pin-hover">{text}
            </Link>
            </div>

        </span>
    );
}





export default Pin;