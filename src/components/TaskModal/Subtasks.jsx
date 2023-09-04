import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Subtasks = ({ title, description }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={title}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="caption"
              color="text.primary"
            >
              {description}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

Subtasks.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Subtasks;
