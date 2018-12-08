import React from 'react'
import PropTypes from 'prop-types'
import { Map, Marker, TileLayer } from 'react-leaflet'

import L from 'leaflet'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

export default class StoresMap extends React.Component {
  static props = {
    position: PropTypes.array.isRequired,
    zoom: PropTypes.number.isRequired,
  }

  scrollToStore = (e, x) => {
    alert(e)
  }

  render() {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    })

    const markers = this.props.stores.map(store => (
      <Marker position={store.postion} onClick={this.scrollToStore} />
    ))

    return (
      <Map
        center={this.props.position}
        zoom={this.props.zoom}
        style={{ height: '550px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers}
      </Map>
    )
  }
}
