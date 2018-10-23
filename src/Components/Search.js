import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import ProductData from '../data/ProductData';
import Dropdown from './Dropdown';

const styles ={
    search: {
        position: 'relative',
        marginLeft: 'auto'
    }
}

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            result: [],
            redirect: false
        }
    }

    handleInputChange = (event) =>{
        if (event.key === 'Enter' && event.target.value.length === 0) {
            this.setState({
                redirect: true
            });
        }

        if ( event.target.value.length >= 1 ){
            let searches = ProductData.filter(product =>
                product.title.toLowerCase().includes(event.target.value.toLowerCase()))

            if ( searches.length > 0 ) {
                this.setState({
                    result: searches
                })
            }
        }
    }

    render() {
        return(
            <div style={styles.search}>
                <TextField
                    className="Bar"
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    margin="normal"
                    variant="outlined"
                    style={{marginLeft: 'auto'}}
                    onKeyPress={this.handleInputChange}
                />
                <div style={{position: 'absolute', width: 182}}>
                    {this.state.result.map((res, index) => {
                        return <Dropdown
                            title={res.title}
                            key={res.id}
                            id={res.id}
                        />
                    })}
                </div>

                {this.state.redirect && (<Redirect to='/shop' />)}
            </div>
        )
    }
}