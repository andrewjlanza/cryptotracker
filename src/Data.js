import React, { Component } from "react"
import Coins from "./Coins.json"
import Coin from "./Coin.js"
class Data extends Component {
  state = {}

  render() {
    let coins = Object.keys(Coins.data).map(id => {
      let coin = Coins.data[id]
      return (
        <Coin
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          price={coin.quotes.USD.price}
        />
      )
    })

    return <div>{coins}</div>
  }
}

export default Data
