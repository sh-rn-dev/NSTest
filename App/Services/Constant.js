export const APPID = '7e8d8dc3477ac460e15c419dc782b6ae';
export const LOCATION = 'Dallas,texas';
export const NUMBER_OF_DAYS = '5';
export const UNITES = 'metric';

const weatherImages = [
  {filename: '01d', src: require('../Images/Icons/weather/art_clear.png')},
  {filename: '02d', src: require('../Images/Icons/weather/art_light_clouds.png')},
  {filename: '03d', src: require('../Images/Icons/weather/art_clouds.png')},
  {filename: '04d', src: require('../Images/Icons/weather/art_clouds.png')},
  {filename: '09d', src: require('../Images/Icons/weather/art_light_rain.png')},
  {filename: '10d', src: require('../Images/Icons/weather/art_rain.png')},
  {filename: '11d', src: require('../Images/Icons/weather/art_storm.png')},
  {filename: '13d', src: require('../Images/Icons/weather/art_snow.png')},
  {filename: '50d', src: require('../Images/Icons/weather/art_fog.png')},
  {filename: '01n', src: require('../Images/Icons/weather/ic_clear.png')},
  {filename: '02n', src: require('../Images/Icons/weather/ic_light_clouds.png')},
  {filename: '03n', src: require('../Images/Icons/weather/ic_cloudy.png')},
  {filename: '04n', src: require('../Images/Icons/weather/ic_cloudy.png')},
  {filename: '09n', src: require('../Images/Icons/weather/ic_light_rain.png')},
  {filename: '10n', src: require('../Images/Icons/weather/ic_rain.png')},
  {filename: '11n', src: require('../Images/Icons/weather/ic_storm.png')},
  {filename: '13n', src: require('../Images/Icons/weather/ic_snow.png')},
  {filename: '50n', src: require('../Images/Icons/weather/ic_fog.png')},
];

export const getWeatherImages = (filename) => weatherImages.find(c => c.filename === filename).src;

export const isToday = (someDate) => {
  const today = new Date();
  return someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear();
};

export const isDateTomorrow = (someDate) => {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  return someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear();
};

export const getMonthName = (month) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return monthNames[month];
};
