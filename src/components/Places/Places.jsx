import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PlacesCard from "./PlacesCard";
import places from "../../data/PlacesData";
import useWindowPosition from "../../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const Places = () => {
  const classes = useStyles();

  const checked = useWindowPosition("header");

  return (
    <div className={classes.root} id="place-to-visit">
      <PlacesCard place={places[0]} checked={checked} />
      <PlacesCard place={places[1]} checked={checked} />
    </div>
  );
};

export default Places;
