import React from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/core/styles";

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

class MapVisualization extends React.Component {

  componentDidMount() {
    this.props.onLoadMap();
  }
  
  render() {
    const {
      classes
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title="Maps" />
        <Map 
            google={this.props.google}
            zoom={4} 
            style={{width: '80%'}}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807
            }}
        >
        <Marker
          name={'Current location'} 
          position={{lat: this.props.latitude, lng: this.props.longitude}}
          />
        </Map>
       </Card>
    );
  };
}

const mapState = (state, ownProps) => {
  const { latitude, longitude } = state.droneLocation;
  return {
    latitude,
    longitude
  };
};

const mapDispatch = dispatch => ({
  onLoadMap: () =>
    dispatch({
      type: actions.DRONE_LOCATION_DATA_REQUEST,
    })
});

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(GoogleApiWrapper({
  apiKey: 'AIzaSyCyiGaDSUythb4CKpSSZXUnwRS1VA3yPRw'
})(MapVisualization)));
