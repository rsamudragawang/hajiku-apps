/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, FONT_NORMAL_PRIMARY, FONT_NORMAL_NOMOR } from '../../styles';
import { scale } from '../../utils/scaling';
import { gray } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  containerDiscover: {
    marginLeft: scale(15),
    marginTop: scale(15)
  },
  imageDiscover: {
    width: scale(328),
    height: scale(120)
  },
  textCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  collapseProduct: {
    flexDirection: 'row',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    borderRadius: 5,
    height: scale(60),
    marginBottom: scale(15)
  },
  viewDesc: {
    marginBottom: scale(15),
    flexDirection: 'row',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'baseline',
    borderTopWidth: 0
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
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5
  },
  viewRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
