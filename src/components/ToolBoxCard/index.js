import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: '300px',
        },
        minWidth: '100%',
        minHeight: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        backgroundSize: 'contain',
        minHeight: '140px',
    },
    mediaContainer: {
        padding: '1rem',
    },
    cardContent: {
        color: [theme.palette.grey.A400]
    },
    cardResources: {
        alignItems: 'flex-start',
        '& p': {
            alignSelf: 'center',
            fontWeight: '500',
            margin: '0 0 5px 3px',
            color: [theme.palette.grey.A400]
        },
        marginBottom: '5px'
    },
    footerContainer: {
        marginTop: 'auto',
        padding: '0 1rem 1rem 1rem'
    },
    cardFooter: {
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& p': {
            color: [theme.palette.grey.A400],
            fontWeight: '500'
        }
    },
    divider: {
        minHeight: '2px',
        marginBottom: '1rem',
        backgroundColor: [theme.palette.grey[200]]
    }
}));

const Divider = () => {
    const classes = useStyles();

    return (
        <div className={classes.divider}></div>
    )
}

const ToolBoxCard = (props) => {
    const classes = useStyles();
    const { image, title, text, resources } = props

    return (
        <Card elevation={4} className={classes.root}>
            <div className={classes.mediaContainer}>
                <CardMedia
                    classes={{ root: classes.image }}
                    image={image}
                    title={title}
                />
            </div>
            <CardContent classes={{ root: classes.cardContent }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" component="p">
                    {text}
                </Typography>
            </CardContent>
            <div className={classes.footerContainer}>
                <Divider />

                <CardActions classes={{ root: classes.cardFooter }}>
                    {resources &&
                        (<Typography variant='body1' component='p'>
                            Resources:
                        </Typography>)
                    }
                    {resources &&
                        resources.map((item, index) => (
                            <Button key={index} href={item.link} target='blank' color="secondary">
                                {item.title}
                            </Button>
                        ))
                    }
                </CardActions>
            </div>
        </Card >
    );
}

export default ToolBoxCard;