import React, { Component } from 'react'

export default class Productlist extends Component {
    render() {
        console.log("hi im the product")
        return (
            <div>
                
                {/* this refers to the items passed from parent component App.js */}
                {this.props.product.item} {this.props.poduct.brand} {this.props.product.units} {this.props.product.quantity}
            </div>
        )
    }
}
