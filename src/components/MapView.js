'use client'
import React, { useState } from 'react'
import {MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import EventMap from './EventMap'
import { markersState } from '@/globalStates/markersState'
import { iconState } from '@/globalStates/iconState'
import CustomMarker from './CustomMarker'
import MarkerClusterGroup from 'react-leaflet-cluster'


function MapView() {
    const {icons} = iconState();
    console.log(icons);
    const { markersData, removeMarker } = markersState();

    return (
            <MapContainer center={[-37.14854491413631, -65.00912441516479]} zoom={5} doubleClickZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <MarkerClusterGroup 
                    chunkedLoading={true}
                    maxClusterRadius={10}
                    >
                    {markersData.map((marker, i) => {
                        return <CustomMarker key={i} position={marker.position} iconType={marker.iconType} popUp={marker.popUp} icons={icons} indice={i} />
                    })}
                </MarkerClusterGroup>
                <EventMap/>
            </MapContainer>
    )
}

export default MapView

