import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = {
    largePaper: {
        minHeight: 250,
        padding: 20,
        marginTop: 50,
        background: 'linear-gradient(to right, white, lightgrey)'
    }
}

export default class BlogPosts extends Component {
    render() {
        return(
                <Grid container item xs={12}
                                direction="column"
                                justify="center"
                                alignItems="stretch">

                    <Grid item >
                        <Paper style={styles.largePaper}>
                            <h1>{this.props.title}</h1>
                            <div className="info">
                                <div className="content">{this.props.body}</div>
                            </div>

                        </Paper>
                    </Grid>
                </Grid>
        );
      }
    }