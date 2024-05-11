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
  input: {
    backgroundColor: '#FFF',
    marginBottom: 20,
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    height: 45,
    borderRadius: 10,
    textAlign: 'center'
  },
  button: {
    borderColor: '#efde00',
    borderRadius: 10,
    backgroundColor: '#efde00',
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 25
  }
});