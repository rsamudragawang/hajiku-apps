import { Dimensions } from 'react-native';

const WINDOW = Dimensions.get('window');

export function heightByScreen(size) {
  // alert(JSON.stringify(WINDOW))
  // if (WINDOW.height == 960 || WINDOW.width == 600) {
  //     alert("7 inch")
  // }else if (WINDOW.height == 731 || WINDOW.width == 431){
  //     alert("6 inch")
  // }else if (WINDOW.height == 640 || WINDOW.width == 360) {
  //     alert("5 inch")
  // }
  return (size * WINDOW.height) / 100;
}

export function widthByScreen(size) {
  return (size * WINDOW.width) / 100;
}
