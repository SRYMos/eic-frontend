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
  buttonLogo: {
    zIndex: 1,
    width: 120,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10
  },
  logo: {
    width: '100%',
    height: '40%',
  }
});