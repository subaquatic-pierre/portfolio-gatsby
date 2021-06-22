import React from "react";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import { navigate } from "gatsby";

interface IProps {
  text?: string;
}

const Message: React.FC<IProps> = ({ text }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    navigate("/", {
      state: {
        messages: [],
      },
    });
    setOpen(false);
  };

  return (
    <Collapse in={open}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {text}
      </Alert>
    </Collapse>
  );
};

export default Message;
