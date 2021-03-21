import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
    const staticDefaultProps = {
        center: {
            lat: 23.806549,
            lng: 90.369505
        },
        zoom: 12
    };

    return (
        <div style={{ height: '70vh' }} className="col">
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