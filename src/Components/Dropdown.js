import React, { Component, Fragment } from 'react';

import { NavLink } from 'react-router-dom';

const styles = {
    paper: {
        backgroundColor: 'white',
        left: 0,
        right: 0,
    }
}


export default class Dropdown extends Component {
    handleClick = () => {
        console.log(this.props.title);
    }

    render() {
        return(
            <Fragment>
                <NavLink to={`/product/${this.props.id}`} style={{ textDecoration: 'none' }}>
                    <div style={styles.paper}
                        onClick={this.handleClick}
                        >
                        {this.props.title}
                    </div>
                </NavLink>
            </Fragment>
        )
    }
}