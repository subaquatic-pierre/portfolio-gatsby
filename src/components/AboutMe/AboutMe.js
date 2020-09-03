import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography, Fade, Card } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { fadeEffect } from '../../pages/about'
import PropTypes from 'prop-types';

import Divider from '../Divider'

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        minWidth: '100%'
    },
    textCard: {
        width: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        '& p': {
            marginBottom: '1rem'
        },
    },
    quoteContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: '1.5rem',
        position: 'relative',
        '& > div': {
            display: 'flex',
        },
        '& svg': {
            color: theme.palette.grey.A700,
            opacity: '0.2',
            fontSize: '6rem',
            position: 'absolute',
            zIndex: '0',
            top: '10px',
            left: '0'
        },
        '& h6': {
            paddingTop: '1.5rem',
            lineHeight: '1.2',
            zIndex: '1',
            marginBottom: '0',
            paddingBottom: '0'
        },
        '& span': {
            marginTop: '10px',
            alignSelf: 'center'
        },
    },
    title: {
        fontSize: 14,
        marginBottom: '0!important'
    }
}))

const AboutMe = (props) => {
    const { show } = props

    const classes = useStyles()
    return (
        <Fade timeout={fadeEffect} in={show}>
            <Grid data-test='component-AboutMe-container' container justify='center' className={classes.content}>
                <Grid justify='center' container item xs={12} sm={8}>
                    <Typography variant='h4'>
                        About Me
                    </Typography>
                </Grid>
                <Divider width={20} color='secondary' space={1} />
                <Grid container item xs={12} sm={6}>
                    <Card className={classes.textCard}>
                        <div className={classes.quoteContainer} >
                            <div >
                                <FormatQuoteIcon />
                                <Typography variant='h6' >
                                    No problem can be solved from the same level of consciousness that created it.
                            </Typography>
                            </div>
                            <Typography variant='caption'>
                                - Albert Einstein
                                
                            </Typography>
                        </div>
                        <Typography>
                            My name is Pierre, I'm a South African living in Dubai. I'm a full stack Web Developer and Cloud Architect. As a PADI Master Instructor and Technical diving instructor, if I am not developing awesome web applications I am underwater teaching scuba diving or taking awesome underwater pictures.
                        </Typography>
                        <Typography>
                            Currently I am honing my OOP skills with a focus on design patterns. I am an advocate of SOLID design principles, I belief that the code should speak for itself, with the use of logical variable semantics and code structure.
                        </Typography>
                        <Typography>
                            I enjoy building awesome web applications and learning the ever changing landscape of web development. By nature I am a person who loves learning and teaching.
                        </Typography>
                        <div className={classes.quoteContainer} >
                            <div >
                                <FormatQuoteIcon />
                                <Typography variant='h6' >
                                    If you can't explain something simply, you don't understand it well enough.
                            </Typography>
                            </div>
                            <Typography variant='caption'>
                                - Albert Einstein
                            </Typography>
                        </div>
                        <Typography className={classes.title} color="textSecondary">
                            Updated:
                            20 August 2020
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Fade >

    )
}

AboutMe.propTypes = {
    show: PropTypes.bool.isRequired
}

export default AboutMe