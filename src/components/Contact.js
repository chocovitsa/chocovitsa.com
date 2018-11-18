import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {
  Container,
  Card,
  CardTitle,
  CardText,
  CardColumns,
  CardBody,
} from 'reactstrap'

import L from 'leaflet'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

import stores from '../content/stores.bg'

export default class Contact extends React.Component {
  render() {
    const cards1 = stores.map(store => (
      <Card>
        <CardBody>
          <CardTitle>{store.retailer}</CardTitle>
          <CardText>
            <address>
              {store.address}
              <br />
              {store.place}
            </address>
          </CardText>
        </CardBody>
      </Card>
    ))

    const cards = <CardColumns>{cards1}</CardColumns>

    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    })
    const position = [42.625243, 25.3960524]
    const markers = stores.map(store => (
      <Marker position={store.postion}>
        <Popup>{store.retailer}</Popup>
      </Marker>
    ))
    return (
      <section id="contact">
        <Container fluid>
          {cards}
          {typeof window !== 'undefined' && (
            <Map center={position} zoom={9} style={{ height: '550px' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {markers}
            </Map>
          )}
        </Container>
      </section>
    )
  }
}
