import { StyleSheet } from 'react-native';
import { horizScale, primaryColor } from '../../Components/LayoutUtil';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    backgroundColor: primaryColor,
    flexDirection: 'row',
    height: '40%',
  },
  dayText: {
    color: 'white',
    fontSize: horizScale(25),
    fontWeight: '600',
  },
  tempMain: {
    color: 'white',
    fontSize: horizScale(50),
    fontWeight: '600',
  },
  forecastTempMain: {
    textAlign: 'center',
    fontSize: horizScale(20),
    fontWeight: '700',
  },
  forecastTempSub: {
    fontSize: horizScale(15),
    textAlign: 'center',
  },
  tempSub: {
    color: 'white',
    fontSize: horizScale(30),
    fontWeight: '600',
  },
  weatherValueTop: {
    color: 'white',
    fontSize: horizScale(20),
    fontWeight: '600',
  },
});
