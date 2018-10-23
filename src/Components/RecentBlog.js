import React, { Component } from 'react';

import PhotoData from '../data/PhotoData';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'rgba(245,245,245,1)',
      },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
      },
    titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      }
}

export default class RecentBlog extends Component {
    render() {
        return (
            <div style={{padding: '40px 0'}}>
                <h2>Other stories you might like:</h2>

                <GridList style={styles.gridList} cols={3}>

                    {PhotoData.map( photo => (
                        <GridListTile key={photo.img}>
                        <img src={photo.img} alt={photo.title} />

                        <GridListTileBar
                        title={photo.title}
                        style={{
                            root: styles.titleBar,
                            title: styles.title,
                        }}
                        actionIcon={
                            <IconButton>
                            <StarBorderIcon style={styles.title} />
                            </IconButton>
                        }
                        />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}