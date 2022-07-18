import React, { Component } from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
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
        const {collections}=this.state
        return (
        <div className='shop-page'>
            {collections.map(({id,...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps} />
            ))
            }
        </div>
        )
    }
}

export default Shop;