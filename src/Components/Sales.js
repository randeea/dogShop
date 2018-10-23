import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    cardContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        margin: '0 auto',
        textAlign: 'center',
        background: 'linear-gradient(to right, pink, orange)'
    },

    happyDog: {
        height: '500px',
        backgroundImage: `url(${require('../pics/happy_two_dogos.jpg')})`,
        backgroundSize: 'cover'
    }
};

export default class Sales extends Component {
    render() {
        return (
            <Grid container spacing={8} >

                <Card style={styles.cardContainer}>

                    <Grid item sm={12}>
                            <div>
                                <CardContent>
                                    <Typography variant="title" color="error" >Save 10%</Typography>
                                    <br />

                                    <Typography variant="subheading" color="secondary">
                                        Hurry Up! Only this weekend!
                                    </Typography>
                                    <br />

                                    <Typography> "Neque porro quisquam est qui dolorem <br />
                                        ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                    </Typography>
                                </CardContent>
                            </div>
                    </Grid>

                    <Grid item sm={12}>
                        <Typography
                            style={styles.happyDog}
                            title="Hurry up you dog!"
                        />
                    </Grid>

                </Card>

            </Grid>

        )
    };

}