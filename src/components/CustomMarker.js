import { iconState } from '@/globalStates/iconState'
import { markersState } from '@/globalStates/markersState';
import React from 'react'
import { Marker, Popup } from 'react-leaflet';


function CustomMarker({ position, iconType, popUp, icons, indice }) {
    
    const selectedIcon = icons.find(icon => icon.id === iconType)?.iconRender;
    console.log(selectedIcon);
    const {removeMarker} = markersState();

    return (
        <Marker position={position} icon={selectedIcon}>
            <Popup>
                <div style={{display:'flex', flexDirection:"column", gap:10, alignItems:"center"}}>
                    {popUp}
                    <button style={{backgroundColor:"red", color:"white", width:"80px"}} onClick={() => removeMarker(indice)}>Eliminar</button>
                </div>
                </Popup>
        </Marker>
    )
}

export default CustomMarker
