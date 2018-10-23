import React, { Component, Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import FormCompletion from './FormCompletion';
// import SuccessMsg from './SuccessMsg';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            open: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        this.setState({
            open: true
        });
        console.log(data);
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleCloseSnackbar = () =>{
        this.setState({
            open: false
        });
    }

    render() {
        return(
            <Fragment>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit} >
                    <TextField
                        id="filled-name-input"
                        label="Name"
                        type="name"
                        name="name"
                        autoComplete="name"
                        margin="normal"
                        variant="filled"
                        onChange={this.handleName}
                    />
                    <br/>
                    <TextField
                        id="filled-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                        onChange={this.handleEmail}
                    />
                    <br/>
                    <TextField
                        id="filled-multiline-static"
                        label="Message"
                        multiline
                        rows="4"
                        margin="normal"
                        variant="filled"
                        style={{width: 182}}
                        onChange={this.handleMessage}
                    />
                    <br />
                    <Button variant="contained" color="primary" type="submit" >
                        Send
                        <Icon style={{marginLeft: '15px'}}>send</Icon>
                    </Button>
                </form>
            <FormCompletion opened={this.state.open} closed={this.handleCloseSnackbar}/>

            {/* <SuccessMsg opened={this.state.open}/> */}

        </Fragment>
        )
    }
}

