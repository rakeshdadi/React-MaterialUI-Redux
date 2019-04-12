import * as actions from "../actions";

const initialState = {
  loading: false,
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const chartDataRecevied = (state, action) => {
    const { data } = action;
  return {
      ...state,
      loading: false,
      data: data
    };
  };

const handlers = {
  [actions.CHART_DATA_REQUEST]:startLoading,
  [actions.CHART_DATA_RECEIVED]: chartDataRecevied,
};

export default (state = initialState , action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
