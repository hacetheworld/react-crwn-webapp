import React, { Component } from 'react';
import SHOP_DTA from './shop.data'
import "./shop.styles.scss"

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections:SHOP_DTA
         }
    }
    render() {
        return ( <h1>Shop Page</h1> );
    }
}

export default Shop;