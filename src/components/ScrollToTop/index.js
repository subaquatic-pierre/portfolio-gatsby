import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { useScrollTrigger } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 4000
    },
}));

const handleClick = (event, ref) => {
    ref.scrollIntoView();
};

function ScrollToTop(props) {
    const { color, size, topRef } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });


    return (
        <Zoom in={trigger}>
            <div onClick={(event) => { handleClick(event, topRef) }} role="presentation" className={classes.root}>
                <Fab color={color} size={size} aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </Zoom>
    );
}

export default ScrollToTop;