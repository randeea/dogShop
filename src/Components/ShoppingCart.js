import React, { Component, Fragment } from 'react';

import TopMenu from './TopMenu';
import Footer from './Footer';

export default class ShoppingCart extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
                <Fragment>
                    <TopMenu />
                        <div>

                            <p className='empty-cart'>Cart is empty</p>

                        </div>
                    <Footer />
                </Fragment>
        );
    }
}