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
import styles from './Styles/DetailScreenStyle';
import { horizScale, primaryColor, Spacer } from '../Components/LayoutUtil';
import Colors from '../Themes/Colors';
import FAIcon from 'react-native-vector-icons/FontAwesome';

class DetailScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dayData: props.navigation.state.params.selectedDay
        ? props.navigation.state.params.selectedDay
        : null,
      isLoading: false,
    };
  }

  render () {
    const {dayData} = this.state;

    const date = (dayData && dayData.dt) && new Date(dayData.dt * 1000);

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={{flex: 1}}>
            <View style={{
              backgroundColor: Colors.silver, flexDirection: 'row', height: '50%',
            }}>
              {
                dayData && <View style={{flex: 1.1, paddingLeft: horizScale(20)}}>
                  <Spacer height={horizScale(20)}/>
                  <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
                    <Image source={require('../Images/Icons/arrow-left.png')}
                           style={{width: horizScale(40), height: horizScale(30)}}
                           resizeMode='contain'
                    />
                  </TouchableOpacity>
                  <Spacer height={horizScale(20)}/>
                  {
                    date && <Text
                      style={styles.topDay}>{isToday(date) ? 'Today' : isDateTomorrow(date) ? 'Tomorrow' : date.toLocaleString('default', {weekday: 'long'})} @{date.getHours()}:{date.getMinutes()}</Text>
                  }
                  <Spacer height={horizScale(5)}/>
                  {
                    date && <Text
                      style={styles.topMonthYear}>{getMonthName(date.getMonth())} {date.getFullYear().toString().substr(-2)}</Text>
                  }
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
                      <Spacer height={horizScale(20)}/>
                      {
                        dayData.main && dayData.main.temp &&
                        <Text style={styles.mainTempText}>{dayData.main.temp}&deg;</Text>
                      }
                      <Spacer height={horizScale(10)}/>
                      {
                        dayData.main && dayData.main.temp &&
                        <Text style={styles.subTempText}>{dayData.main.feels_like}&deg;</Text>
                      }
                    </View>
                    {
                      dayData && dayData.weather && dayData.weather.length > 0 &&
                      <View style={{flex: 0.9, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={getWeatherImages(dayData.weather[0].icon)}
                               style={{height: horizScale(140), width: horizScale(140)}}/>
                        <Text style={styles.weatherNameText}>{dayData.weather[0].main}</Text>
                      </View>
                    }
                  </View>
                </View>
              }

            </View>
            {
              dayData && <View style={{marginLeft: horizScale(20), marginTop: horizScale(20)}}>
                {
                  dayData.main && dayData.main.humidity &&
                  <Text style={styles.otherDetailsText}>Humidity: {dayData.main.humidity} %</Text>
                }
                <Spacer height={horizScale(5)}/>
                {
                  dayData.main && dayData.main.pressure &&
                  <Text style={styles.otherDetailsText}>Pressure: {dayData.main.pressure} hPa</Text>
                }
                <Spacer height={horizScale(5)}/>
                {
                  dayData.wind && dayData.wind.speed &&
                  <Text style={styles.otherDetailsText}>Wind: {dayData.wind.speed} meter/sec</Text>
                }
              </View>
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
