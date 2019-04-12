import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import moment from "moment";

const styles = theme => ({});
const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  },
});

const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

class DashboardVisualization extends React.Component {

  componentDidMount() {
    this.props.onLoadDashboard();
  }

  render() {
    const {
      classes,
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title="Dashboard" />
        <div style={{padding: '20px'}}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              Latitude
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={8}>
              {this.props.latitude}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              Longitude
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={8}>
            {this.props.longitude}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              Temparature
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={8}>
              {this.props.temparature}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              Last Received
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={8}>
              {moment(this.props.timestamp).format("DD-MM-YYYY H:m:s")}
            </Grid>
          </Grid>
        </div>
       </Card>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  const { latitude, longitude, temparature, timeStamp } = state.dashboard;
  return {
    latitude,
    longitude,
    temparature,
    timeStamp
  };
};

const mapDispatchToProps = dispatch => ({
    onLoadDashboard: () =>
    dispatch({
      type: actions.DRONE_LOCATION_DATA_REQUEST,
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DashboardVisualization));
