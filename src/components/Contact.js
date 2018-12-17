import React from 'react'
import { Container, Col, Row, Button } from 'reactstrap'
import { injectIntl, intlShape } from 'react-intl'

import bgStores from '../content/stores.bg'
import enStores from '../content/stores.en'
import Waypoint from 'react-waypoint'

const stores = { en: enStores, bg: bgStores }

class Contact extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
  }

  state = {
    StoresMap: null,
    position: [42.625243, 25.3960524],
    zoom: 9,
    indexOnFocus: null,
  }

  async componentDidMount() {
    const { default: StoresMap } = await import('../components/StoresMap')
    this.setState({ StoresMap })
  }

  focusOnStore = (position, index) => {
    this.setState({ position, zoom: 14, indexOnFocus: index })
  }

  render() {
    const {
      intl: { locale },
    } = this.props
    const cards = stores[locale].map((store, index) => (
      <>
        <Waypoint
          onEnter={() => this.focusOnStore(store.postion, index)}
          topOffset="5%"
          bottomOffset="90%"
          key={index}
        />
        <div
          className={
            index === this.state.indexOnFocus ? 'store active' : 'store'
          }
        >
          <h3>{store.retailer}</h3>
          <p>
            {store.address}
            <br />
            {store.place}{' '}
            <Button
              color="link"
              size="lg"
              onClick={() => this.focusOnStore(store.postion)}
            >
              <i className="fa fa-map-marker-alt" />
            </Button>
          </p>
        </div>
      </>
    ))

    const { StoresMap } = this.state
    return (
      <section id="contact">
        <Container>
          <Row>
            <Col lg="4">{cards}</Col>
            <Col lg="8">
              {StoresMap && (
                <div className="sticky-top">
                  <StoresMap
                    stores={stores[locale]}
                    position={this.state.position}
                    zoom={this.state.zoom}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default injectIntl(Contact)
