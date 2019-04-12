import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const Header = ({
  classes,
  handleDrawerToggle
}) => {
  const name = "Rakesh's";
  return (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
    <IconButton
      color="inherit"
      aria-label="Open drawer"
      onClick={handleDrawerToggle}
      className={classes.menuButton}
    >
      <MenuIcon />
    </IconButton>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        {name} EOG React Visualization Assessment
      </Typography>
    </Toolbar>
  </AppBar>
  );
};

export default withStyles(styles)(Header);
