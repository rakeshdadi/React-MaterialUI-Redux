import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import createStore from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import MapVisualization from "./components/MapVisualization";
import ChartVisualization from "./components/ChartVisualization";
import DashboardVisualization from "./components/DashboardVisualization";
import AppLayout from "./Layout/AppLayout";

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(39,49,66)"
    },
    secondary: {
      main: "rgb(197,208,222)"
    },
    background: {
      main: "rgb(226,231,238)"
    }
  }
});

const App = props => {
  return (<BrowserRouter>
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <AppLayout>
      <Switch>
          <Route exact path="/" component={DashboardVisualization} />
          <Route path="/map" component={MapVisualization} />
          <Route path="/chart" component={ChartVisualization} />
      </Switch>
        <ToastContainer />
      </AppLayout>
    </Provider>
  </MuiThemeProvider>
  </BrowserRouter>
);
  }

export default App;
