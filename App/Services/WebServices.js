import axios from './AxiosApi';
import { APPID, LOCATION, NUMBER_OF_DAYS, UNITES } from './Constant';

const apiServices = {
  getWeather () {
    return new Promise((resolve) => {
      axios.get('weather?q=' + LOCATION + '&units=' + UNITES + '&APPID=' + APPID)
        .then(response => { resolve(response); })
        .catch(err => { resolve(err); });
    });
  },
  getForecast () {
    return new Promise((resolve) => {
      axios.get('forecast?q=' + LOCATION + '&units=' + UNITES + '&cnt=' + NUMBER_OF_DAYS + '&APPID=' + APPID)
        .then(response => { resolve(response); })
        .catch(err => { resolve(err); });
    });
  },
};
export default apiServices;
