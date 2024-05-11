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
  questionBox: {
    display: 'flex',
    width: '85%',
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    borderColor: '#FFF',
    borderWidth: 4,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 30
  },
  number: {
    width: '15%',
    fontSize: 30,
    color: '#66184b'
  },
  questionDesc: {
    width: '85%'
  },
  choiceBox: {
    width: '60%'
  },
  choice: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#FFF',
    padding: 3,
    borderRadius: 20,
    marginBottom: 15
  },
  choiceNo: {
    width: 30,
    height: 30,
    borderColor: '#66184b',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66184b',
    marginRight: 10,
    color: '#FFF'
  },
  choiceNoCorrect: {
    width: 30,
    height: 30,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginRight: 10,
    color: '#FFF'
  },
  choiceNoIncorrect: {
    width: 30,
    height: 30,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginRight: 10,
    color: '#FFF'
  },
  choiceDesc: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});