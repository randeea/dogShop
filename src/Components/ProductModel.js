import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import {Card,
        CardActions,
        CardActionArea,
        CardContent,
        CardMedia,
        Button,
        Typography} from '@material-ui/core';


export default class ProductModel extends Component {
    render() {
        return (
            <Card style={this.props.styles}>
                <CardActionArea>

                <NavLink to={`/product/${this.props.id}`}>

                     <CardMedia
                        image={require("../pics/" + this.props.image)}
                        style= {{height: 250}}
                        />
                </NavLink>

                    <CardContent>
                        <Typography  variant="headline" component="h2" align="center">
                            <a>{this.props.title} </a>
                            <br />
                            ${this.props.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="large" color="secondary" fullWidth={true}>
                    Add to cart
                    </Button>
                </CardActions>

            </Card>
        )
    };
}