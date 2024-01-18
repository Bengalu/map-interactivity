
import React, {useState} from 'react'
import { useMapEvents, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

function EventMap() {

    const [position, setPosition] = useState(null);

    const scoutingIcon = new Icon({
        iconUrl:'detective.svg',
        iconSize: [40, 40]
    })
    
    const EventMap = useMapEvents({
        dblclick(e){
            console.log(e);
            setPosition(e.latlng);
            console.log(position);
            return 
        }
    })
   
    return position === null ? null : (
        <Marker  position={[position.lat, position.lng]} icon={scoutingIcon}>
          <Popup>CACHA SO CRA LOCO</Popup>
        </Marker>
      )
}

export default EventMap
