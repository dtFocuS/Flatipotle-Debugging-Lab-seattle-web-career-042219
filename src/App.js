import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {
  constructor() {
    super()
    this.state = {
      orders: []
    }
  }


  addOrder = (order) => {
    //console.log(order);
    this.setState({orders: this.state.orders.concat(order)}, () =>
      console.log(this.state)

    );


  }

  render() {
    // const orders = () => {
    //   this.state.orders.map( (order, idx) => {
    //     return <Order key={idx} {...order} />
    //   })
    const orders = this.state.orders.map( (order, idx) => {
        return <Order key={idx} {...order} />
      })
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/logo.png') } className="App-logo" alt="logo" />
        </header>

        <Form onAddOrder={this.addOrder} />

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            { orders }
          </div>
        </div>
      </div>
    )
  }
}

export default App
