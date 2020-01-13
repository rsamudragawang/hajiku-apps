import { StyleSheet } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN } from '../../styles';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});

export default styles;
