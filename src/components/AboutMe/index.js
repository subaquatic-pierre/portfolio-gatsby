import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { Grid, Typography, Fade, Card } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { fadeEffect } from '../../pages/about'
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
    const theme = useTheme()
    return (
        <Fade timeout={fadeEffect} in={show}>
            <Grid container justify='center' className={classes.content}>
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
                            Currently working towards a Cloud Computing Masters degree with the University of Marryland Global Campus.
                            I am a full stack web developer and Master Scuba Diving Instructor, from South Africa, living in the UAE. When I am not building awesome web applications
                            I am underwater.
                        </Typography>
                        <Typography>
                            Naturally, my computing experience started with gaming, setting up LAN parties was an introduction to networking. I don't know if we
                            spent more time playing games or troubleshooting network issues.
                        </Typography>
                        <Typography>
                            Doing IT in high school for 3 years exposed me to the programming language Delphi, and the first glimpse of AI with "Conway's Game of Life".
                            After school hours worked I as a junior technician in a small computer shop.
                        </Typography>
                        <Typography>
                            My web developer career started by setting up the digital presesence for Sandy Beach Dive Centre. We initially started with a Wordpress wedsite. Being small business owner I set up everything from social media and marketing accounts to the Google business platform, including Google Ads, Search Console and Analytics.
                        </Typography>
                        <Typography>
                            As the business grew I found it more difficult to use Wordpress, with each new feature came a new cost as well as the rigid design constraints of page builders.
                            This led me down the road of HTML and CSS, which progressed to Javascript, Python and Cloud Computing.
                        </Typography>
                        <Typography>
                            I enjoy building awesome web applications and learning the ever changing landscape of web development. By nature I am a person who loves learning and teaching.
                            The internet is the future and its technologies are an enticing feature of the development of civilization.
                        </Typography>
                        <Typography className={classes.title} color="textSecondary">
                            Updated:
                            13 May 2020
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Fade>

    )
}

export default AboutMe