import React, { FC, useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Quiz from './src/screens/Quiz';
import ScoreBoard from './src/components/ScoreBoard';
import InputName from './src/components/InputName';

const App: FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [showScoreBoard, setShowScoreBoard] = useState<boolean>(false);
  const [inputName, setInputName] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [refNo, setRefNo] = useState<string>("");
  const [scoreboard, setScoreboard] = useState<{
    refNo: string;
    name: string;
    score: number;
  }[]>([]);

  useEffect(() => {
    let localStorageLocal = localStorage.getItem("scoreboard");
    if (localStorageLocal != null) {
      setScoreboard(JSON.parse(localStorageLocal));
    }
  }, [])

  const toScoreBoardScreen = async (open: boolean) => {
    if (name != '' && open) {
      try {
        let scoreboardLocal = await localStorage.getItem("scoreboard");
        if (scoreboardLocal == null) {
          localStorage.setItem("scoreboard", JSON.stringify([
            {
              refNo,
              name,
              score
            }
          ]))
          setScoreboard([{
            refNo,
            name,
            score
          }])
          setShowScoreBoard(open);
        } else if (scoreboardLocal != null && !scoreboard.find(e => e.refNo == refNo)) {
          setScoreboard(JSON.parse(scoreboardLocal));
          scoreboard.push({
            refNo,
            name,
            score
          });
          scoreboard.sort((a: { score: number; }, b: { score: number; }) => {
            if (a.score > b.score) {
              return -1;
            } else if (a.score < b.score) {
              return 1;
            } else {
              return 0;
            }
          })
          setScoreboard(scoreboard);
          await localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
          setShowScoreBoard(open);
        } else {
          setShowScoreBoard(open);
        }
      } catch (error) {

      }
    } else {
      setShowScoreBoard(open);
    }
    setIsStarted(false);
  }

  const startGame = (n: string) => {
    setInputName(false);
    setName(n);
    setScore(0);
    setRefNo(new Date().getTime().toString(36));
    setIsStarted(true);
  }

  const goInputName = () => {
    setInputName(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {isStarted && !inputName ? <Quiz name={name} score={score} setScore={setScore} toScoreBoardScreen={toScoreBoardScreen} /> : !showScoreBoard && !inputName ? <Home goInputName={goInputName} toScoreBoardScreen={toScoreBoardScreen} /> : <></>}
      {showScoreBoard ? <ScoreBoard toScoreBoardScreen={toScoreBoardScreen} refNo={refNo} scoreboard={scoreboard} /> : <></>}
      {inputName ? <InputName startGame={startGame} /> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'cursive',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(102 23 75)'
  }
});

export default App;
