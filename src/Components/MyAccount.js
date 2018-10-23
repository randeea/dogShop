import React, { Component, Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';

import TopMenu from './TopMenu';
import Footer from './Footer';
import SignUp from './SignUp';
import SignIn from './SignIn';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

export default class MyAccount extends Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <Fragment>
                <TopMenu />
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        style={{margin: 'auto'}}
                    >

                        <Tab label="Sign Up" icon={<HelpIcon  />} />
                        <Tab label="Sign In" icon={<PersonPinIcon />} />

                    </Tabs>
                </AppBar>

                {value === 0 && <TabContainer><SignUp /></TabContainer>}
                {value === 1 && <TabContainer><SignIn /></TabContainer>}

                <Footer />
            </Fragment>
        )
    }
}