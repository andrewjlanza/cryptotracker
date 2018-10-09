import React, { Component } from "react"
import Data from "./Data"
class Coin extends Component {
  state = {}
  render() {
    return (
      <tr>
        <td> {this.props.id}</td>
        <td>{this.props.name}</td>
        <td> {this.props.symbol}</td>
        <td> {this.props.price}</td>
      </tr>
    )
  }
}

export default Coin
