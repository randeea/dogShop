import React, { Component, Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = {
    container: {
        display: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        margin: '0 auto'
      },
      textField: {
        marginLeft: '24px',
        marginRight: '24px',
        width: 238
      }
}


export default class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            showPassword: false,
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    handleClickShowPass = () => {
        this.setState(state => ({ showPassword: !state.showPassword}));
      }

    render() {
        return (
            <Fragment>
                <form style={styles.container} noValidate autoComplete="off">
                    <TextField
                        label="Email"
                        style={styles.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    <FormControl style={{marginLeft: 24}}>
                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                            <Input
                            id="adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPass}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <Button variant="outlined" size="large" color="primary" style={{margin: '35px'}}>
                      Sign In Your Account
                    </Button>

                </form>
            </Fragment>
        )
    }
}