import React from 'react';
import clsx from 'clsx';
import {
    Drawer,
    Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

import caps from '../utils/capitalize'
import Layout from '../components/Layout';
import AboutSidebar from '../components/AboutSidebar'
import AboutMe from '../components/AboutMe'
import Certifications from '../components/Certifications'
import Experience from '../components/Experience'
import path from 'path'

export const drawerWidth = 240;
export const mobileDrawerWidth = 60;
export const fadeEffect = {
    appear: 1500,
    enter: 1000,
    exit: 100,
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 224px)',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    content: {
        minHeight: '100%',
        maxWidth: `calc(100% - 60px)`,
        [theme.breakpoints.up('sm')]: {
            maxWidth: `calc(100% - ${drawerWidth}px)`,
        },
        paddingTop: '1rem',
        paddingBottom: '1rem'
    },
    mobileDrawer: {
        width: mobileDrawerWidth,
    },
    mobileDrawerPaper: {
        overflowX: 'hidden',
        width: mobileDrawerWidth,
    }
}));

const About = (props) => {
    const classes = useStyles();
    const [contentShow, setContentShow] = React.useState('About Me')
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleAboutListClick = (contentID) => {
        setContentShow(contentID)
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const showContent = () => {
        switch (contentShow) {
            case ('About Me'):
                return (<AboutMe show />)
            case ('Certifications'):
                return (<Certifications show />)
            case ('Experience'):
                return (<Experience show />)
            default:
                break
        }
    }

    const title = path.basename(__filename).split('.')[0]

    return (
        <Layout title={caps(title)}>
            <div className={classes.root}>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    <Hidden smUp >
                        <Drawer
                            variant="permanent"
                            className={clsx(classes.mobileDrawer)}
                            classes={{ paper: classes.mobileDrawerPaper }}
                        >
                            <AboutSidebar handleAboutListClick={handleAboutListClick} mobile />
                        </Drawer>
                        <Drawer
                            variant="temporary"
                            anchor='left'
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            <AboutSidebar />
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown >
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            <AboutSidebar handleAboutListClick={handleAboutListClick} />
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    {showContent()}
                </main>
            </div >
        </Layout>
    );
}

export default About;