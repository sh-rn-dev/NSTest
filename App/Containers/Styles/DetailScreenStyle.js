import {StyleSheet} from 'react-native'
import { horizScale } from '../../Components/LayoutUtil';
import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topDay: {
    color: '#000',
    fontSize: horizScale(25),
    fontWeight: '600',
  },
  topMonthYear: {
    color: Colors.charcoal,
    fontSize: horizScale(20),
    fontWeight: '500',
  },
  mainTempText: {
    color: '#000',
    fontSize: horizScale(60),
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: horizScale(2),
  },
  subTempText: {
    color: Colors.charcoal,
    fontSize: horizScale(40),
    fontWeight: '600',
    textAlign: 'center',
  },
  weatherNameText: {
    color: Colors.charcoal,
    fontSize: horizScale(20),
    fontWeight: '600',
  },
  otherDetailsText: {
    color: Colors.charcoal,
    fontSize: horizScale(20),
  },
})
