/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import {
  COLOR_ONBOARDING_HEADER,
  COLOR_ONBOARDING_TEXT,
  COLOR_WHITE,
  FONT_NORMAL_PRIMARY,
  FONT_NORMAL_NOMOR
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import { gray } from '../../styles/colors';

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
  },
  collapseProduct: {
    alignSelf: 'baseline',
    flexDirection: 'row',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    borderRadius: 5,
    // marginBottom: scale(15)
    margin: 15
  },
  viewDesc: {
    margin: 15,
    marginBottom: scale(130),
    flexDirection: 'row',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'baseline'
  },
  viewTxtList: {
    flex: 4,
    marginLeft: scale(20),
    justifyContent: 'center'
  },
  viewNumberList: {
    flex: 1,
    // margin: scale(6),
    padding: scale(8),
    justifyContent: 'center',
    backgroundColor: '#738FFF'
  },
  listProduct: {
    ...FONT_NORMAL_PRIMARY,
    color: gray.gray_dark,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: scale(13)
  },
  listProductTitle: {
    ...FONT_NORMAL_PRIMARY,
    fontFamily: 'Montserrat-Bold',
    color: gray.gray_dark
  },
  listProductNomor: {
    ...FONT_NORMAL_NOMOR,
    color: COLOR_WHITE,
    fontWeight: 'bold',
    margin: scale(18)
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
