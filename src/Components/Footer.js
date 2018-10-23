import React, { Component } from 'react';

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
    footer: {
        padding: '25px 0px',
        margin: '0 auto',
        backgroundColor: 'rgba(245,245,245,1)',
        textAlign:'center',
        maxWidth: '1200px'
    },
}

export default class Footer extends Component {
    render() {
        return(
            <div style={styles.footer}>
                    <p style={{ display: 'inline-block',
                                fontFamily:'Libre Baskerville, serif',
                                fontSize: '18px',
                                margin: '0 150px 0 50px'}}>
                        <a href="/" style={{textDecoration:'none', color: '#0080a9'}}>Happy dogs</a>
                    </p>
                    <p style={{ display: 'inline-block',
                                margin: '0 auto',
                                textAlign:'center',
                                fontFamily:'Libre Baskerville, serif',
                                fontSize: '16px'}}>All Rights Reserved. Designed by AnRadu © &nbsp; Privacy Policy.
                    </p>
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} style={{marginLeft: '100px', textAlign:'center'}} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </div>
        )
    }
}