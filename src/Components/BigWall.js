import React, {Component} from 'react';

const topImage = require('../pics/color_run.jpg');

const style = {
    backgroundImage: `url(${topImage})`,
    backgroundSize: 'centre',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '500px',
    width: '100%'
}

export default class BigWall extends Component {
    render() {
        return( <div style={style}></div> )
    };
}