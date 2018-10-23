import React, { Component } from 'react';

import TopMenu from './TopMenu';
import BigWall from './BigWall';
import Products from './Products';
import Sales from './Sales';
import Footer from './Footer';

export default class Home extends Component {
    render () {
        return (
          <div>
            <TopMenu />
            <BigWall />
            <Products />
            <Sales />
            <Footer />
          </div>
        )
    }
}