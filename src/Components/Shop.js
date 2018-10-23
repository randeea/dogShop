import React, { Component } from 'react';

import TopMenu from './TopMenu';
import TableSize from './TableSize';
import Footer from './Footer';
import Products from './Products';

export default class Shop extends Component {
    render(){
        return(
            <div>
                <TopMenu />
                <Products />
                <TableSize />
                <Footer />
            </div>
        );
    };
}