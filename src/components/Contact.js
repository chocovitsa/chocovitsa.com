import React from 'react'
import {
  Container,
  Card,
  CardTitle,
  CardText,
  CardColumns,
  CardBody,
} from 'reactstrap'

import stores from '../content/stores.bg'

export default class Contact extends React.Component {
  state = {
    StoresMap: null,
  }

  async componentDidMount() {
    const { default: StoresMap } = await import('../components/StoresMap')
    this.setState({ StoresMap })
  }

  render() {
    const { StoresMap } = this.state

    const cards = stores.map(store => (
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

    return (
      <section id="contact">
        <Container fluid>
          <CardColumns>{cards}</CardColumns>
          {StoresMap && <StoresMap stores={stores} />}
        </Container>
      </section>
    )
  }
}
