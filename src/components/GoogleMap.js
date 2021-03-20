import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
    const staticDefaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '70vh'}} className="col">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDIpq9OIT4zOoKtDHMxmOynViFAblBCDw0" }}
                defaultCenter={staticDefaultProps.center}
                defaultZoom={staticDefaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMap;