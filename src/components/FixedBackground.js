import React, { Children } from 'react'
import Waypoint from 'react-waypoint'
import { relative } from 'path'

class AsFixedBackground extends React.Component {
  state = {
    position: 'fixed',
  }

  fixIt = () =>
    this.setState({
      position: 'fixed',
    })

  leaveIt = () =>
    this.setState({
      position: 'relative',
    })

  render() {
    const style = {
      position: this.state.position,
      zIndex: -1,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    }
    return (
      <Waypoint onEnter={this.fixIt} onLeave={this.leaveIt}>
        <div style={{ position: 'relative', height: '100vh' }}>
          <div style={style}>{this.props.children}</div>
        </div>
      </Waypoint>
    )
  }
}

export default AsFixedBackground
