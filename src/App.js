import React, { Component } from 'react';
import products from './Data';
//import Productlist from "./Productlist"
import "./App.css"

export default class App extends Component {
    state = {
        products: products,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false,
        addedItems: [],

    }
    change = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        // add Button needs to go here
       
    }
    //this allows input to add new item
    addButton = (event) =>{
        event.preventDefault(); 
        const newItem = {
            item: this.state.item,
            units: this.state.units,
            brand: this.state.brand,
            quantity: this.state.quantity,
        }

        // this updates the state-data
        this.setState({
            item:'',
            brand:'',
            units: '',
            quantity: 0,
            products: [newItem, ...this.state.products]
        })

    }
   addToList = (item) =>{
       this.setState({
           newItem: [item,...this.state.newItem]
       })
   }
    render() {
        console.log(this.state.products)
        return (
            <div id="List">
                <form id="form" onSubmit={(event)=> {this.addButton(event)}}>
                <label htmlFor="item">Item:</label>
                <input type="text" value={this.state.item} onChange = {this.change} id="item"/>
                <br/>
                <label htmlFor="brand">Brand:</label>
                <input type="text" value={this.state.brand} onChange = {this.change} id="brand"/>
                <br/>
                <label htmlFor="units">Units:</label>
                <input type="text" value={this.state.units} onChange = {this.change} id="units"/>
                <br/>
                <label htmlFor="quantity">Quantity:</label>
                <input type="text" value={this.state.quantity} onChange = {this.change} id="quantity"/>
                <button type="submit">Add To List </button>
                <button onClick={()=> this.isPurchased() }type="button"> Remove </button>
                </form>
               
                <div id="purchases">
                    {
                        this.state.products.map((product,) => {
                            return (
                                <div>
                                {product.item} {product.brand} {product.units} {product.quantity}
                                </div>
                            )
                        })
                    }
                 <h1 id="title">Good Times List!</h1>
                 {/* <ProductList key={index} product={product}/> */}
                </div>

            </div>
        )
    }
}
