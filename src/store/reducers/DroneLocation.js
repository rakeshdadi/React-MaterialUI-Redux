import * as actions from "../actions";

const initialState = {
  loading: false,
  latitude: null,
  longitude: null
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const droneLocationDataRecevied = (state, action) => {
  const latitude = action.droneLocation.latitude;
  const longitude = action.droneLocation.longitude;
  return { ...state, loading: false, latitude, longitude };
  };

const handlers = {
  [actions.DRONE_LOCATION_DATA_REQUEST]:startLoading,
  [actions.DRONE_LOCATION_DATA_RECEIVED]: droneLocationDataRecevied,
};

export default (state = initialState , action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
