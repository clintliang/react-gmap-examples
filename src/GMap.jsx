import React from "react";
import {
  GoogleMapLoader,
  GoogleMap,
  Marker,
} from "react-google-maps";

const GMap = props => (
  <section style={{ height: `600px` }}>
    <GoogleMapLoader
      containerElement={
        <div
          {...props.containerElementProps}
          style={{
            height: `100%`,
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={11}
          defaultCenter={{ lat: 49.2827, lng: -123.1207 }}
          onClick={props.onMapClick}
        >
          {props.markers.map((marker, index) => (
            <Marker
              {...marker}
              onRightclick={() => props.onMarkerRightclick(index)}
            />
          ))}
        </GoogleMap>
      }
    />
  </section>
);

export default GMap;
