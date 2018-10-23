import React, { Component } from 'react';

import TopMenu from './TopMenu';
import Footer from './Footer';
import ProductData from '../data/ProductData.json';

export default class ProductPage extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        let result = ProductData.filter(product => product.id === parseInt(this.props.match.params.id, 10));
        // console.log(result);
        this.setState({
            data: result[0]
        })
    }


    render() {
        return(
            <div>
                <TopMenu />
                    <h1>Details Of The Product Here:</h1>
                        <p>
                        {this.state.data.title}
                        <br/>
                        -
                        <br/>
                        {this.state.data.price}
                        </p>
                <Footer />
            </div>
        );
    }
}