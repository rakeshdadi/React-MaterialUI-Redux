import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import DroneLocationSagas from "./DroneLocation";
import Chart from "./Chart";

export default [...ApiErrors, ...WeatherSagas, ...DroneLocationSagas, ...Chart];
