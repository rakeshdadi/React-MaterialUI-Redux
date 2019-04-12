import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose'
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import Header from "./Header";

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

class AppLayout extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, children } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
          <List>
            <ListItem component={Link} to="/">
             <ListItemIcon>
               <MailIcon />
             </ListItemIcon>
                 <ListItemText primary="Dashboard"/>
             </ListItem>
             <ListItem  component={Link} to="/map">
              <ListItemIcon>
               <InboxIcon />
               </ListItemIcon>
                 <ListItemText primary="Maps"/>
             </ListItem>
             <ListItem  component={Link} to="/chart">
             <ListItemIcon>
               <MailIcon />
             </ListItemIcon>
                 <ListItemText primary="Chart"/>
             </ListItem>
          </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header classes={classes} handleDrawerToggle={this.handleDrawerToggle} />
        <nav className={classes.drawer}>
         <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  withStyles(styles)
)(AppLayout)
