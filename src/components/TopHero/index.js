import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Grid, Typography, Fade } from '@material-ui/core';

import Divider from '../Divider'


const useStyles = makeStyles(theme => ({
    heroBackground: {
        minHeight: '65vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    heroContainer: {
        minHeight: '75vh',
        color: 'white',
        textShadow: theme.palette.shadows.large,
        '& button': {
            marginTop: '0.8rem'
        }
    },
    headingText: {
        textShadow: theme.palette.shadows.large
    }
}))
const TopHero = props => {
    const { backgroundImage, noText } = props
    const classes = useStyles()

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={classes.heroBackground}>
            <Grid className={classes.heroContainer} container item direction='column' alignItems='center' justify='center'>
                <Fade in timeout={
                    { enter: 1500 }
                }>
                    <Typography variant='h2' className={classes.headingText} component='h1'>
                        Welcome !
                    </Typography>
                </Fade>
                {noText
                    &&
                    (<>
                        <Divider color='secondary' space={2} width={20} />
                        <Button variant='contained' color='secondary' >Check Us Out</Button>
                    </>)
                }
            </Grid>
        </div>
    )
}

export default TopHero;