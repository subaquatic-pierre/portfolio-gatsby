import React from 'react'
import clsx from 'clsx'
import {
    Container,
    List,
    ListItem,
    Divider,
    ListItemText,
    Typography,
    Grid,
} from '@material-ui/core'
import { makeStyles, useScrollTrigger } from '@material-ui/core'
import path from 'path'


import caps from '../utils/capitalize'
import Layout from '../components/Layout';
import ScrollToTop from '../components/ScrollToTop';
import ToolBoxCard from '../components/ToolBoxCard';
import { toolboxData } from '../pagedata/toolboxData'
import { default as MyDivider } from '../components/Divider'



const useStyles = makeStyles(theme => ({
    toolboxRoot: {
        display: 'flex',
    },
    toolboxNav: {
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        width: '250px',
        top: '80px',
        right: '0',
        display: 'none',
        minHeight: '100%',
        padding: ' 16px 16px 16px 0px',
        overflowY: 'auto',
        position: 'fixed',
        flexShrink: '0',
    },
    moveUp: {
        top: 'calc(80px - 2rem)',
        transition: 'all 0.5s ease-in'
    },
    navHeading: {
        fontSize: '20px',
        fontWeight: '800 !important',
    },
    toolboxMain: {
        [theme.breakpoints.up('sm')]: {
            width: 'calc(100% - 250px)',
        },
        width: '100%',
    },
    toolBoxContainer: {
        padding: '1.5rem',
    },
    toolboxHeader: {
        paddingBottom: '2rem',
    },
    developerSection: {
        [theme.breakpoints.up('sm')]: {
            padding: '1rem 0.5rem',
        },
        paddingBottom: '2rem',

        scrollMargin: '70px'
    },
    cardSection: {
        [theme.breakpoints.up('sm')]: {
            padding: '1rem 0',
            margin: '0 -0.5rem'
        },
    },
    cardCol: {
        padding: '1rem 0',
        [theme.breakpoints.up('sm')]: {
            padding: '1rem 0.5rem'
        }
    }
}))

const Toolbox = props => {
    const classes = useStyles()

    // Create devSection to each developer section
    const devSection = toolboxData.reduce((acc, value) => {
        acc[value.link] = React.createRef();
        return acc;
    }, {});

    // side nav item click handler
    const handleNavClick = link => {
        window.scrollTo(0, devSection[link].current.offsetTop)
        devSection[link].current.scrollIntoView()
    };

    // Side nav Content heading click handler
    const handleScrollToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' })
    };

    // shrink app bar on scroll
    const shrinkTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const title = path.basename(__filename).split('.')[0]

    return (
        <Layout title={caps(title)}>
            <div className={classes.toolboxRoot}>
                <div className={classes.toolboxMain}>
                    <Container maxWidth='lg' className={classes.toolBoxContainer}>
                        <Grid container justify='center' item xs={12} direction='column' alignItems='center'>
                            <Typography className={classes.toolboxHeader} variant='h2' component='h1'>
                                Toolbox
                        </Typography>
                        </Grid>
                        {toolboxData.map((category, index) => {
                            const { title, link, tech } = category
                            return (
                                <Grid ref={devSection[link]} key={index} direction='column' container className={classes.developerSection} item xs={12}>
                                    <Typography variant='h4' component='h2'>
                                        {title}
                                    </Typography>
                                    <MyDivider color='secondary' width={10} space={1} />
                                    <Grid container className={classes.cardSection} item xs={12}>
                                        {tech.map((item, index) => {
                                            return (
                                                <Grid className={classes.cardCol} key={index} item container alignItems='center' direction='column' xs={12} sm={12} md={4}>
                                                    <ToolBoxCard
                                                        resources={item.resources}
                                                        key={index}
                                                        title={item.title}
                                                        image={item.image}
                                                        text={item.text} />
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Container>
                </div>
                <nav className={clsx(classes.toolboxNav, shrinkTrigger ? classes.moveUp : null)}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem onClick={handleScrollToTop} button>
                            <ListItemText classes={{ primary: classes.navHeading }} primary='Contents' />
                        </ListItem>
                        <Divider />
                        {toolboxData.map((category, index) => {
                            return (
                                <ListItem onClick={() => { handleNavClick(category.link) }} key={index} button>
                                    <ListItemText primary={category.title} />
                                </ListItem>
                            )
                        })}
                    </List>
                </nav>
                <ScrollToTop trigger={shrinkTrigger} color='secondary' size='small' />
            </div>
        </Layout>
    )
}

export default Toolbox;