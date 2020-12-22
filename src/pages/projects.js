import React, { useEffect, useState } from 'react';
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


// const createData = () => {
//     let data = []
//     // Set project data to show depending on production switch
//     // Check what data to show
//     if (sideProjectPage) {
//         for (let i = 0; i < numProdProjects; i++) {
//             const item = productionProjectsData[i]
//             data.push(<Project
//                 key={i}
//                 index={i}
//                 item={item}
//                 expandId={expandId}
//                 handleExpandClick={handleExpandClick}
//             />)
//         }
//         return data
//     } else {
//         for (let i = 0; i < numSideProjects; i++) {
//             const item = sideProjectsData[i]
//             data.push(<Project
//                 key={i}
//                 index={i}
//                 item={item}
//                 expandId={expandId}
//                 handleExpandClick={handleExpandClick}
//             />)
//         }
//         return data
//     }
// }

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
    const [expandId, setExpandId] = useState(-1)
    const [loading, setLoading] = useState(false)
    const [numProdProjects, setNumProdProjects] = useState(2)
    const [numSideProjects, setNumSideProjects] = useState(2)
    const [sideProjectPage, setSideProjectPage] = useState(false)
    const [projectData, setProjectData] = useState([])

    const handleExpandClick = (index) => {
        setExpandId(expandId === index ? -1 : index)
    };

    const handleProductionProjectSwitch = async (event) => {
        removeInfiniteScrollListener()
        setExpandId(-1)
        setSideProjectPage(!sideProjectPage)
    };

    // shrink app bar on scroll
    const shrinkTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    // Add or remove event listener
    const addInfiniteScrollListener = () => {
        return window.addEventListener('scroll', handleInfiniteScroll);
    }

    const removeInfiniteScrollListener = () => {
        return window.removeEventListener('scroll', handleInfiniteScroll);
    }

    const updateProjects = (event) => {
        addInfiniteScrollListener()
        if (sideProjectPage) {
            setProjectData(sideProjectsData.slice(0, numSideProjects))
        } else {
            setProjectData(productionProjectsData.slice(0, numProdProjects))
        }
        setLoading(false)
    }

    const scrollUpdate = () => {
        setTimeout(updateProjects, 2000)
    }

    const handleInfiniteScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight + 100) {
            removeInfiniteScrollListener()
            if (sideProjectPage) {
                // Check within data index
                if (numSideProjects < sideProjectsData.length) {
                    setLoading(true)
                    setNumSideProjects(numSideProjects + 1)
                }
            } else {
                // Check within data index
                if (numProdProjects < productionProjectsData.length) {
                    setLoading(true)
                    setNumProdProjects(numProdProjects + 1)
                }
            }
        }
    }

    useEffect(() => {
        updateProjects()
    }, [sideProjectPage])

    useEffect(() => {
        scrollUpdate()
    }, [numSideProjects, numProdProjects])

    useEffect(() => {
        addInfiniteScrollListener()
        setProjectData(productionProjectsData.slice(0, numProdProjects))
    }, [])

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
                            Toggle between production projects and non-production projects. Non-production projects may not be live, all source code can be found in the GitHub repo.
                    </Typography>
                        <FormGroup>
                            <br />
                            <FormControlLabel
                                control={<ProjectsSwitch checked={sideProjectPage} onChange={handleProductionProjectSwitch} />}
                                label="Non-Production Projects"
                            />
                        </FormGroup>
                    </Grid>
                    {projectData && projectData.map((project, idx) => (
                        <Project
                            key={idx}
                            index={idx}
                            item={project}
                            expandId={expandId}
                            handleExpandClick={handleExpandClick}
                        />
                    ))}
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
