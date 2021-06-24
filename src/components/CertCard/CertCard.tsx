import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 130,
  },
  subClassMedia: {
    height: 70,
  },
  subCourse: {
    maxWidth: 250,
    marginLeft: "auto",
  },
});

interface IProps {
  cert: Certification;
  subCourse?: boolean;
}

const CertCard: React.FC<IProps> = ({ cert, subCourse }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, {
        [classes.subCourse]: subCourse,
      })}
    >
      <CardActionArea target="blank" href={cert.link}>
        <CardMedia
          className={clsx(classes.media, {
            [classes.subClassMedia]: subCourse,
          })}
          image={cert.image}
          title={cert.title}
        />
      </CardActionArea>
    </Card>
  );
};

export default CertCard;
