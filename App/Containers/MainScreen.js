import React, { Component } from 'react';
import { ScrollView, View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import {
  getMonthName,
  getWeatherImages, isDateTomorrow, isToday,
} from '../Services/Constant';
// Styles
import styles from './Styles/MainScreenStyle';
import { horizScale, primaryColor, Spacer } from '../Components/LayoutUtil';
import apiServices from '../Services/WebServices';

class MainScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      otherDaysList: [],
      todayWeather: null,
      isLoading: false,
    };
  }

  componentDidMount () {
    apiServices.getWeather().then((response) => {
      if (response && response.status && (response.status === 200 || response.status === 201)) {
        this.setState({todayWeather: response.data});
      } else {
        Alert.alert('NSTest', 'Something went wrong! \n Please try again later!');
      }
    });

    apiServices.getForecast().then((response) => {
      if (response && response.status && (response.status === 200 || response.status === 201)) {
        this.setState({otherDaysList: response.data.list});
      } else {
        Alert.alert('NSTest', 'Something went wrong! \n Please try again later!');
      }
    });
  }

  render () {
    const {otherDaysList, todayWeather} = this.state;
    const todayDate = (todayWeather && todayWeather.dt) && new Date(todayWeather.dt * 1000);

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('DetailScreen', {selectedDay: todayWeather}); }}
              style={styles.topView}>
              {
                todayWeather && <View style={{flex: 1.2, alignItems: 'center', justifyContent: 'center'}}>
                  {
                    todayDate && <Text
                      style={styles.dayText}>{isToday(todayDate) ? 'Today' : isDateTomorrow(todayDate) ? 'Tomorrow' : todayDate.toLocaleString('default', {weekday: 'long'})}, {getMonthName(todayDate.getMonth())} {todayDate.getFullYear().toString().substr(-2)}</Text>
                  }
                  <Spacer height={horizScale(10)}/>
                  {
                    todayWeather.main && todayWeather.main.temp &&
                    <Text style={styles.tempMain}>{todayWeather.main.temp}&deg;</Text>
                  }
                  <Spacer height={horizScale(10)}/>
                  {
                    todayWeather.main && todayWeather.main.feels_like &&
                    <Text style={styles.tempSub}>{todayWeather.main.feels_like}&deg;</Text>
                  }
                </View>
              }
              {
                todayWeather && todayWeather.weather && todayWeather.weather.length > 0 &&
                <View style={{flex: 0.8, alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={getWeatherImages(todayWeather.weather[0].icon)}
                         style={{height: horizScale(110), width: horizScale(110)}}/>
                  <Text style={styles.weatherValueTop}>{todayWeather.weather[0].main}</Text>
                </View>
              }
            </TouchableOpacity>
            <FlatList
              style={{flex: 1, margin: horizScale(10)}}
              data={otherDaysList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => <ChildItem item={item}
                                                        onTap={(selectedItem) => {
                                                          this.props.navigation.navigate('DetailScreen', {selectedDay: selectedItem});
                                                        }}/>}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

function ChildItem ({item, onTap, idx}) {
  let day = new Date(item.dt * 1000);
  return (
    <TouchableOpacity onPress={() => { onTap(item); }}>
      <Spacer height={horizScale(10)}/>
      <View style={{flexDirection: 'row'}}>
        {
          item && item.weather && item.weather.length > 0 &&
          <Image source={getWeatherImages(item.weather[0].icon)}
                 style={{height: horizScale(60), width: horizScale(60)}}/>
        }
        <View style={{flex: 1, justifyContent: 'center', marginLeft: horizScale(10)}}>
          {
            day && <Text style={{
              fontWeight: '700',
              fontSize: horizScale(20),
            }}>{isToday(day) ? 'Today' : isDateTomorrow(day) ? 'Tomorrow' : day.toLocaleString('default', {weekday: 'long'})} @{day.getHours()}:{day.getMinutes()}</Text>
          }
          <Spacer height={horizScale(5)}/>
          {
            item && item.weather && item.weather.length > 0 &&
            <Text style={{fontWeight: '600'}}>{item.weather[0].main}</Text>
          }
        </View>
        <View style={{justifyContent: 'center', marginRight: horizScale(20)}}>
          {
            item && item.main && item.main.temp && <Text style={styles.forecastTempMain}>{item.main.temp}&deg;</Text>
          }
          <Spacer height={horizScale(5)}/>
          {
            item && item.main && item.main.temp &&
            <Text style={styles.forecastTempSub}>{item.main.feels_like}&deg;</Text>
          }
        </View>
      </View>
    </TouchableOpacity>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
