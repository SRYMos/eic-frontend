import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(102 23 75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  buttonScore: {
    zIndex: 2,
    position: 'absolute',
    top: 20,
    right: 25,
    width: 50,
    height: 50
  },
  buttonLogo: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: '100%',
    height: '40%',
  }
});