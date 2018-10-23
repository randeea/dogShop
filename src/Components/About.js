import React, { Component } from 'react';

import TopMenu from './TopMenu';
import Footer from './Footer';
import Form from'./Form';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const styles = {
    cardContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        margin: '0 auto',
        textAlign: 'center',
        padding: '40px',
        background: 'linear-gradient(to right, white, lightgrey)'
    }
};

export default class About extends Component {
    state = {
        name: 'Full Name',
        multiline: 'Controlled',
      };

      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        return(
        <div >
            <TopMenu />

            <Paper  elevation={1}
                    style={{
                        padding:'40px',
                        margin: '50px 0',
                        background: 'linear-gradient(to right, white, lightgrey)'
                        }}>
                <Typography variant="headline"
                            component="h1"
                            style={{
                                textAlign:'center',
                                fontWeight: 'bold'
                                }}>
                    About Us
                </Typography>

                <Typography component="p"
                            style={{
                                margin: '30px',
                                textAlign:'justify'
                                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque id diam vel quam elementum pulvinar. Dignissim convallis aenean et tortor at risus viverra. Accumsan tortor posuere ac ut consequat semper. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Nunc pulvinar sapien et ligula ullamcorper malesuada. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Sit amet risus nullam eget felis eget nunc lobortis mattis. Habitasse platea dictumst vestibulum rhoncus est. In ante metus dictum at tempor. Pulvinar pellentesque habitant morbi tristique senectus. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Pharetra magna ac placerat vestibulum.
                </Typography>
            </Paper>

            <Grid container spacing={8} >
                <Card style={styles.cardContainer}>

                    <Grid item sm={12}>
                        <div >
                            <List>
                                <ListItem>
                                    <Avatar>LP</Avatar>
                                    <ListItemText primary="Lily Pears" secondary=" Andouille drumstick sirloin, kielbasa shank tail ground round pork belly.Spicy jalapeno bacon ipsum dolor amet ham leberkas drumstick pork short loin bresaola chuck porchetta jerky tongue kevin salami cupim cow boudin." />
                                </ListItem>
                                <li>
                                <Divider inset />
                                </li>
                                <ListItem>
                                    <Avatar>OP</Avatar>
                                    <ListItemText primary="Olivia Pebles" secondary="Cow flank swine turkey frankfurter, pork turducken tenderloin bresaola corned beef. Burgdoggen jerky corned beef biltong meatloaf pig. Shank cow beef ribs picanha, capicola corned beef burgdoggen bacon sirloin pig andouille spare ribs frankfurter ham hock." />
                                </ListItem>
                                <Divider inset component="li" />
                                <ListItem>
                                    <Avatar>AR</Avatar>
                                    <ListItemText primary="Ari Raul" secondary="Beef short ribs picanha tongue chuck drumstick beef ribs buffalo turkey. Buffalo pastrami ball tip, prosciutto pork chop kevin tri-tip frankfurter rump swine landjaeger corned beef. Prosciutto cow short loin doner. Cow frankfurter ball tip, tri-tip landjaeger shoulder rump spare ribs corned beef. Shoulder jerky landjaeger tenderloin kielbasa chuck beef ribs cupim tail bacon pig picanha. Jerky sausage pork loin capicola kevin cupim. Drumstick tongue filet mignon pig tail." />
                                </ListItem>
                            </List>
                        </div>
                    </Grid>

                    <Grid item sm={12}>
                        <div>
                            <CardContent>
                                <Typography variant="title" color="default" >Let's talk!</Typography>
                                <br />

                                <Typography variant="caption" >
                                    (Help us improve ourselves)
                                </Typography>
                                <br />

                            <Form />

                            </CardContent>
                        </div>
                    </Grid>
                </Card>
            </Grid>

            <Footer />

        </div>
        );
    }
};