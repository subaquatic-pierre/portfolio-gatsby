import React from 'react';
import clsx from 'clsx';
import {
    Grid,
    ListItemText,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Collapse,
    List,
    ListItem,
    ListItemIcon,
} from '@material-ui/core'
import { IconButton } from 'gatsby-theme-material-ui'
import { makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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

const Project = (props) => {
    const { handleExpandClick, item, index, expandId } = props
    const classes = useStyles()

    return (
        <Grid key={index} container item xs={12} className={classes.cardCol}>
            <Card elevation={3} className={classes.cardRoot}>
                <CardHeader
                    title={item.title}
                    subheader={item.date}
                />
                <CardMedia
                    component='a'
                    href={item.url}
                    target='blank'
                    className={classes.media}
                    image={item.image}
                    title={item.title}
                />
                <CardContent >
                    <Typography variant="body1" color="textSecondary" component="p">
                        {item.text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.bottomContent}>
                    {item.github &&
                        <IconButton href={item.github} target='blank'>
                            <GitHubIcon />
                        </IconButton>
                    }
                    <IconButton href={item.url} target='blank'>
                        <LanguageIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expandId === index,
                        })}
                        onClick={() => { handleExpandClick(index) }}
                        aria-expanded={expandId === index}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expandId === index} timeout="auto" unmountOnExit>
                    <CardContent >
                        <Typography paragraph><b>Technologies:</b></Typography>
                        <List className={classes.techList}>
                            {item.tech.map((tech, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon color='secondary' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={tech.title}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

export default Project;