/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_ONBOARDING_HEADER, COLOR_ONBOARDING_TEXT, COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    height: 100
    // padding: 16
  },
  header: {
    color: COLOR_ONBOARDING_HEADER,
    fontFamily: 'Neue Haas Grotesk Text Pro',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: scale(15)
  },
  text: {
    color: COLOR_ONBOARDING_TEXT,
    fontFamily: 'Montserrat',
    fontSize: 14,
    marginHorizontal: scale(40),
    textAlign: 'center'
  },
  logoOnBoard: {
    width: scale(200),
    height: scale(200),
    marginBottom: METRICS.baseMargin
  }
});
const options = {
  container: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    width: 180,
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    color: '#FF4057',
    marginLeft: 7
  }
};
export default { styles, options };
