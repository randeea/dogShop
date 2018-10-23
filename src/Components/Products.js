import React, { Component } from 'react';

import {Divider } from '@material-ui/core';

import ProductModel from './ProductModel';
import ProductData from '../data/ProductData.json';

const styles = {
    titleProducts: {
        fontSize: '30px',
        fontFamily: 'roboto, sans-serif',
        textAlign: 'center'
    },

    container: {
        textAlign: 'center',
        flexWrap: 'wrap'
    },

    prod1: {
        width: '250px',
        margin: '20px 30px',
        padding: '5px',
        display: 'inline-block'
    }
};

export default class Products extends Component {
    render() {
        return (
            <div className='mainContainer'>

                <p style={styles.titleProducts}>Products</p>

                <Divider />

                <div style={styles.container}>
                    {ProductData.map((product, index) => {
                        return<ProductModel
                            styles={styles.prod1}
                            image={product.image}
                            cls={product.cls}
                            title={product.title}
                            price={product.price}
                            key={product.id}
                            id={product.id}
                        />
                    })}
                </div>
            </div>
        )
    };
}