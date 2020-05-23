import React from 'react'
import clsx from 'clsx'
import {
    Fade,
    Typography,
    Container,
    Box,
    Collapse,
    IconButton,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableBody
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import ITExperience from '../../pagedata/ITExperienceData'
import nonITExperience from '../../pagedata/nonITExperienceData'


import { fadeEffect } from '../../pages/about';
import Divider from '../Divider'

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
    },
    tableDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    table: {
        margin: '0 auto',
        '& table': {
            dispay: 'flex',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
        },
    },
    certContainer: {
        paddingLeft: '0',
        paddingRight: '0'
    },
    tableHead: {
        backgroundColor: theme.palette.primary.main,
        '& th': {
            color: theme.palette.common.white,
        }
    },
    pos: {
        minWidth: '350px'
    },
    org: {
        minWidth: '300px'
    },
    per: {
        minWidth: '300px'
    },
    cursor: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}))

const Row = (props) => {

    const { job, nonIT } = props;
    const classes = useStyles();

    return (
        <React.Fragment >
            <TableRow >
                <TableCell component="th" className={clsx({ [classes.pos]: !nonIT })} scope="row">
                    <Typography variant='body1' component='h5'>
                        {nonIT ?
                            (<span>
                                {job.position}
                            </span>)
                            :
                            (<b>
                                {job.position}
                            </b>)
                        }
                    </Typography>
                </TableCell>
                <TableCell className={clsx({ [classes.org]: !nonIT })} align='right'>{job.organization}</TableCell>
                <TableCell className={clsx({ [classes.per]: !nonIT })} align='right'>{job.period}</TableCell>
            </TableRow>
            <TableRow>
            </TableRow>
        </React.Fragment >
    );
}

const Experience = props => {
    const classes = useStyles()
    const { show } = props
    const [open, setOpen] = React.useState(false);


    return (
        <Fade timeout={fadeEffect} in={show}>
            <Container className={classes.content}>
                <Typography variant='h4' component='h1'>
                    Experience
                </Typography>
                <Divider width={20} color='secondary' space={1} />
                <div className={classes.tableDiv}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow className={classes.tableHead}>
                                    <TableCell>Position</TableCell>
                                    <TableCell align='right'>Organization</TableCell>
                                    <TableCell align='right'>Period</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {ITExperience.map((job, index) => (
                                    <Row key={job.title} key={index} job={job} />
                                ))}
                                <TableRow >
                                    <TableCell>
                                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align='left' className={classes.cursor} onClick={() => setOpen(!open)} component="th" scope="row">
                                        <Typography variant='body1'>
                                            <b>
                                                Non-IT Experince
                                            </b>
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <Box margin={1}>
                                                <Table size="small" aria-label="non-it-experience">
                                                    <TableHead>
                                                        <TableRow className={classes.tableHead}>
                                                            <TableCell>Position</TableCell>
                                                            <TableCell align='right'>Organization</TableCell>
                                                            <TableCell align='right'>Period</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {nonITExperience.map((job) => (
                                                            <Row key={job.title} job={job} nonIT />
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Container>
        </Fade >
    )
}

export default Experience;