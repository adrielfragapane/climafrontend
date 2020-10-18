import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

const MapContainer = props => {

  const google = props.google;

  const { coordinates } = useContext(Context);

  useEffect(() => {

  }, [coordinates]);

  return (
    <Map
      google={google}
      zoom={8}
      initialCenter={{ lat: -34.625528, lng: -58.4482137 }}
      center={coordinates}>
      <Marker mapCenter={true}
        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
        name={'Current location'} position={coordinates}>
      </Marker>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAilsiP9Tmbb3TzaYFHM9JTAMGiX7O2sbk')
})(MapContainer)