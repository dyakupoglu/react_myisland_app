import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import { Link as Scroll } from "react-scroll";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const navigationLinks = [
  { name: "Home", href: "" },
  { name: "About", href: "" },
  { name: "Resume", href: "" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    fontFamily: "Nunito",
    background: "rgba(0, 0, 0, 0.3)",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "5rem",
  },
  drawer: {
    width: "20%",
  },
  drawNav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "Nunito",
    fontSize: "5rem",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "5rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const [checkDrawer, setCheckDrawer] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <SortRoundedIcon
              className={classes.icon}
              onClick={() => setCheckDrawer(true)}
            />
          </IconButton>
          <SwipeableDrawer
            className={classes.drawer}
            anchor="right"
            open={checkDrawer}
            onOpen={() => setCheckDrawer(true)}
            onClose={() => setCheckDrawer(false)}
          >
            <CloseIcon onClick={() => setCheckDrawer(false)} />
            <Divider />
            <Box
              sx={{
                width: 250,
              }}
              role="presentation"
            >
              <List>
                {["Home", "About", "Resume", "Contact"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Divider />
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> My
            <span className={classes.colorText}>Island.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <KeyboardArrowDownTwoToneIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
