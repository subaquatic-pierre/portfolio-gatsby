import React from "react";
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
  TableBody,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core";

import { fadeEffect } from "../../pages/about";
import { Divider } from "../Divider";
import { CertCard } from "../CertCard";
import certData from "../../../content/certs/certData";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
  },
  tableDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  table: {
    "& table": {
      dispay: "flex",
      justifyContent: "center",
      whiteSpace: "nowrap",
    },
  },
  certContainer: {
    paddingLeft: "0",
    paddingRight: "0",
  },
  tableHead: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    "& th": {
      color: theme.palette.common.white,
    },
  },
  pos: {
    minWidth: "370px",
  },
}));

interface IRowProps {
  program: Certification;
}

const Row: React.FC<IProps> = ({ program }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const subCourse =
    program.courses && program.courses.length > 0 ? true : false;

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          {subCourse && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
        <TableCell component="th" scope="row" className={classes.pos}>
          <Typography variant="body1" component="h5">
            <b>{program.title}</b>
          </Typography>
        </TableCell>
        <TableCell align="center">{program.date}</TableCell>
        <TableCell align="center">
          <CertCard cert={program} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="body1" gutterBottom component="div">
                <b>Sub-courses</b>
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow className={classes.tableHead}>
                    <TableCell>Program</TableCell>
                    <TableCell align="center">Date Obtained</TableCell>
                    <TableCell align="center">Certificate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {program.courses &&
                    program.courses.map((course: Certification) => (
                      <TableRow key={course.title}>
                        <TableCell component="th" scope="row">
                          {course.title}
                        </TableCell>
                        <TableCell align="right">{course.date}</TableCell>
                        <TableCell align="right">
                          <CertCard cert={course} subCourse />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

interface ICertProps {
  show: boolean;
}

const Certifications: React.FC<ICertProps> = ({ show }) => {
  const classes = useStyles();

  return (
    <Fade timeout={fadeEffect} in={show}>
      <Container className={classes.content}>
        <Typography variant="h4" component="h1">
          Certifications
        </Typography>
        <Divider width={20} color="secondary" space={1} />
        <div className={classes.tableDiv}>
          <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow className={classes.tableHead}>
                  <TableCell />
                  <TableCell>Program</TableCell>
                  <TableCell align="center">Date Obtained</TableCell>
                  <TableCell align="center">Certificate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {certData.map((program: Certification, index: number) => (
                  <Row key={index} program={program} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </Fade>
  );
};

export default Certifications;
