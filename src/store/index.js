import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import weatherReducer from "./reducers/Weather";
import droneLocationReducer from "./reducers/DroneLocation";
import dashboardReducer from "./reducers/Dashboard";
import chartReducer from "./reducers/Chart";

export default () => {
  const rootReducer = combineReducers({
    weather: weatherReducer,
    droneLocation: droneLocationReducer,
    dashboard: dashboardReducer,
    chart: chartReducer
  });

  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, composeEnhancers(middlewares));

  sagas.forEach(sagaMiddleware.run);

  return store;
};
