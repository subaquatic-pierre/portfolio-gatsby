import React from "react";
import {
  Grid,
  Card,
  IconButton,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    paddingTop: "1.5rem",
    paddingBottom: "2rem",
  },
  cardCol: {
    [theme.breakpoints.up("md")]: {
      padding: "2rem 0",
    },
    padding: "1.2rem 0",
  },
  cardRoot: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  toggleSection: {
    [theme.breakpoints.up("sm")]: {
      margin: "2rem auto",
    },
    padding: "1rem",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "5px",
    margin: "1rem auto",
    "& span": {
      fontWeight: "bold",
    },
  },
  bottomContent: {
    marginTop: "auto",
  },
  techList: {
    paddingTop: "0",
    paddingBottom: "0",
  },
  actionArea: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
  },
  smallText: {
    alignSelf: "end",
    fontSize: "0.8rem",
  },
}));

const Project: React.FC = ({
  projectData: {
    index,
    isProduction,
    title,
    date,
    image,
    description,
    url,
    github,
    tech,
  },
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const showGitHubIcon = github !== "none";

  return (
    <Grid
      key={index}
      item
      sm={isProduction ? 4 : 3}
      className={classes.cardCol}
    >
      <Card elevation={3} className={classes.cardRoot}>
        <CardHeader title={title} subheader={date} />
        <CardMedia
          component="a"
          href={url}
          target="blank"
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionArea}>
          {showGitHubIcon && (
            <IconButton href={github} target="blank">
              <GitHubIcon />
            </IconButton>
          )}
          {url && (
            <IconButton href={url} target="blank">
              <LanguageIcon />
            </IconButton>
          )}
          <IconButton
            onClick={handleClick}
            className={classes.smallText}
            aria-label="show more"
          >
            TECH
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Popover
          id={index}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <CardContent>
            <Typography paragraph>
              <b>Technologies:</b>
            </Typography>
            <List className={classes.techList}>
              {tech &&
                tech.map((tech, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={tech.title} />
                  </ListItem>
                ))}
            </List>
          </CardContent>
        </Popover>
      </Card>
    </Grid>
  );
};

export default Project;
