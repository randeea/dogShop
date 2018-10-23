import React, { Component, Fragment } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const styles = {
    close: {
        padding: 16,
    }
}

export default class FormCompletion extends Component {
    handleClose = (event) => {
        this.props.closed();

    };

    render() {
        return(
            <Fragment>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',

                    }}

                    open={this.props.opened}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Your message has been sent successfully! </span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            style={styles.close}
                            onClick={this.handleClose}>
                            <CloseIcon />
                        </IconButton>,

                    ]}
                />
            </Fragment>
        )
    }
}