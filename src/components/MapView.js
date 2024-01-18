'use client'
import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import EventMap from './EventMap'




function MapView() {

    


    return (
        <div>
            <MapContainer center={[-37.14854491413631, -65.00912441516479]} zoom={5} doubleClickZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <EventMap/>
            </MapContainer>
        </div>
    )
}

export default MapView

