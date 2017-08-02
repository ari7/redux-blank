import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HelloButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={this.props.onClick}>Click me</button>
    )
  }
}
