import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Plot from "react-plotly.js";
import moment from "moment";

const styles = theme => ({});
const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

class chartVisualization extends React.Component {

  componentDidMount() {
    this.props.onLoadChart();
  }

  render() {
    const {
      classes,
      data
    } = this.props;
    var timeData = [];
    var tempData = [];

    if(typeof (data) !== 'undefined' && data.data.length > 0){
      data.data.forEach(item => {
         tempData = [...tempData, item.metric];
         timeData = [...timeData, moment(item.timestamp).format("DD-MM-YYYY H:m:s")];
      });
    }
    
    var chartData = [
      {
        y: tempData,
        x: timeData,
        type: 'scatter'
      }
    ];
    return (
      <Card className={classes.card}>
        <CardHeader title="chart Visualization" />
        <CardContent>
        <Plot
        data={chartData}
        layout={ {width: '100%', height: 400} }
      />
        </CardContent>
      </Card>
    );
  };
}

const mapState = (state, ownProps) => {
  const {
    loading,
    data,
  } = state.chart;
  return {
    loading,
    data
  };
};

const mapDispatch = dispatch => ({
  onLoadChart: () =>
    dispatch({
      type: actions.CHART_DATA_REQUEST,
    })
});

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(chartVisualization));
