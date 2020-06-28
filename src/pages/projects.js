import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    CircularProgress,
    Grid,
    Container,
    FormGroup,
    FormControlLabel,
    useScrollTrigger
} from '@material-ui/core';
import path from 'path'

import Layout from '../components/Layout';
import ProjectsSwitch from '../components/ProjectsSwitch'
import Divider from '../components/Divider'
import Project from '../components/Project'
import ScrollToTop from '../components/ScrollToTop'

import caps from '../utils/capitalize'

import productionProjectsData from '../pagedata/productionProjectsData'
import sideProjectsData from '../pagedata/sideProjectsData'

const useStyles = makeStyles((theme) => ({
    pageContainer: {
        paddingTop: '1.5rem',
        paddingBottom: '2rem',
    },
    cardCol: {
        [theme.breakpoints.up('md')]: {
            padding: '2rem 0'
        },
        padding: '1.2rem 0'
    },
    cardRoot: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    toggleSection: {
        [theme.breakpoints.up('sm')]: {
            margin: '2rem auto'
        },
        padding: '1rem',
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: '5px',
        margin: '1rem auto',
        '& span': {
            fontWeight: 'bold',
        },
    },
    bottomContent: {
        marginTop: 'auto'
    },
    techList: {
        paddingTop: '0',
        paddingBottom: '0'
    }
}));

const Projects = () => {
    const classes = useStyles();
    const [expandId, setexpandId] = React.useState(-1)
    const [loading, setLoading] = React.useState(false)
    const [numProdProjects, setNumProdProjects] = React.useState(2)
    const [numSideProjects, setNumSideProjects] = React.useState(2)
    const [prodPage, setProdPage] = React.useState(true)

    const handleExpandClick = (index) => {
        setexpandId(expandId === index ? -1 : index)
    };

    const handleProductionProjectSwitch = (event) => {
        setProdPage(!event.target.checked);
        removeInifiteScrollListener()
        setexpandId(-1)
    };

    // shrink app bar on scroll
    const shrinkTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const createData = () => {
        let data = []
        // Set project data to show depending on production switch
        // Check what data to show
        if (prodPage) {
            for (let i = 0; i < numProdProjects; i++) {
                const item = productionProjectsData[i]
                data.push(<Project
                    key={i}
                    index={i}
                    item={item}
                    expandId={expandId}
                    handleExpandClick={handleExpandClick}
                />)
            }
            return data
        } else {
            for (let i = 0; i < numSideProjects; i++) {
                const item = sideProjectsData[i]
                data.push(<Project
                    key={i}
                    index={i}
                    item={item}
                    expandId={expandId}
                    handleExpandClick={handleExpandClick}
                />)
            }
            return data
        }
    }

    // Call update projects on reaching bottom of screan
    const updateProjects = (view) => {
        // Check if production projects or side projects
        if (view === 'prod') {
            // Increment number of projects
            const tmp = numProdProjects
            setNumProdProjects(tmp + 1)
        } else {
            // Increment number of projects
            const tmp = numSideProjects
            setNumSideProjects(tmp + 1)
        }
        setLoading(false)
    }

    // Add or remove event listener
    const addInfiniteScrollListener = () => {
        return window.addEventListener('scroll', handleInfiniteScroll);
    }

    const removeInifiteScrollListener = () => {
        return window.removeEventListener('scroll', handleInfiniteScroll);
    }

    const handleInfiniteScroll = () => {
        // Check if height of scroll
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight + 100) {
            // Check production or sideprojects 
            if (prodPage) {
                // Check within data index
                if (numProdProjects < productionProjectsData.length) {
                    // Set timeout to simulate data fetch
                    setLoading(true)
                    setTimeout(() => { updateProjects('prod') }, 2000)
                    removeInifiteScrollListener()
                }
            } else {
                // Check within data index
                if (numSideProjects < sideProjectsData.length) {
                    // Set timeout to simulate data fetch
                    setLoading(true)
                    setTimeout(() => { updateProjects('side') }, 2000)
                    removeInifiteScrollListener()
                }
            }
        }
    }

    useEffect(() => {
        addInfiniteScrollListener()
    })

    const title = path.basename(__filename).split('.')[0]

    return (
        <Layout title={caps(title)}>
            <Container maxWidth='lg' >
                <Grid container item xs={12} className={classes.pageContainer}>
                    <Grid container className={classes.headingSection} direction='column' justify='center' alignItems='center'>
                        <Typography variant='h2' component='h1' align='center'>
                            Projects
                    </Typography>
                        <Divider width={20} space={1.5} color='secondary' />
                    </Grid>
                    <Grid container className={classes.toggleSection} item xs={12} sm={8}>
                        <Typography variant='body1'>
                            Toggle between production projects and non-production projects. Non-production are projects done
                            for courses, practice or are not yet complete.
                    </Typography>
                        <FormGroup>
                            <br />
                            <FormControlLabel
                                control={<ProjectsSwitch checked={!prodPage} onChange={handleProductionProjectSwitch} />}
                                label="Non-Production Projects"
                            />
                        </FormGroup>
                    </Grid>
                    {createData()}
                    {loading &&
                        <Grid container justify='center'>
                            <CircularProgress disableShrink />
                        </Grid>
                    }
                </Grid>
            </Container >
            <ScrollToTop trigger={shrinkTrigger} color='secondary' size='small' />
        </Layout>
    );
}

export default Projects;
