import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import L from 'leaflet'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

export default class StoresMap extends React.Component {
  render() {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    })

    const position = [42.625243, 25.3960524]

    const markers = this.props.stores.map(store => (
      <Marker position={store.postion}>
        <Popup>{store.retailer}</Popup>
      </Marker>
    ))

    return (
      <Map center={position} zoom={9} style={{ height: '550px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers}
      </Map>
    )
  }
}
