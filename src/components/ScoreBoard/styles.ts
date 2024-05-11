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
  },
  title: {
    fontSize: 34,
    width: '100%',
    marginLeft: 20,
    color: '#FFF',
    marginBottom: 20
  },
  scoreLine: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  scoreLineOwner: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#a89700'
  },
  name: {
    width: '50%',
    fontSize: 25,
    color: '#FFF',
    paddingLeft: 50
  },
  score: {
    width: '50%',
    fontSize: 25,
    color: '#FFF',
    textAlign: 'right',
    paddingRight: 25
  }
});