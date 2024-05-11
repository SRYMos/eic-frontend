import React, { FC, useEffect, useState } from "react";
import { styles } from "./styles";
import { Image, View } from "react-native";
import Question from "../../components/Question";
import { questions } from './questions.json'
import Summary from "../../components/Summary";

interface QuizProps {
  name: string;
  score: number;
  toScoreBoardScreen: (open: boolean) => void;
  setScore: (score: number) => void;
}

const Quiz: FC<QuizProps> = ({ name, score, setScore, toScoreBoardScreen }) => {
  const [question, setQuestion] = useState<{
    question: string;
    choice: string[];
    answer: string;
  }>();
  const [choice, setChoice] = useState<string[]>([""]);
  const [id, setId] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [correct, setCorrect] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);

  const [questionData, setQuestionData] = useState(questions.map(e => e));

  useEffect(() => {
    randomQuestion();
  }, [])

  const randomQuestion = () => {
    setCount(count + 1);
    const ran = Math.floor(Math.random() * questionData.length);
    setId(ran);
    setQuestion(questionData[ran])
    randomChoice(questionData[ran].choice.map(e => e));
  }

  const randomChoice = (chioce: string[]) => {
    return new Promise<void>((resolve) => {
      let newChioce = [];
      for (let i = 0; chioce.length != 0; i++) {
        const ran = Math.floor(Math.random() * chioce.length);
        const c = chioce[ran];
        newChioce.push(c);
        chioce.splice(ran, 1);
      }
      setChoice(newChioce);
      resolve()
    })
  }

  const answerSelected = (ans: string) => {
    setAnswer(ans);
    setCorrect(question?.answer == ans ? "1" : "0");
    setScore(question?.answer == ans ? score + 1 : score)

    setTimeout(async () => {
      if (questionData.length > 1) {
        setAnswer("");
        setCorrect("");
        questionData.splice(id, 1);
        await randomQuestion();
      } else {
        setQuestionData(questions.map(e => e));
        setDone(true)
      }
    }, 500);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonLogo}>
        <Image
          style={styles.logo}
          source={require('./../../../assets/logo2.png')}
        />
      </View>
      {question && choice && !done ? <Question number={count} questionDesc={question?.question} choice={choice} answerSelected={answerSelected} answer={answer} correct={correct} /> : <></>}
      {done ? <Summary score={score} toScoreBoardScreen={toScoreBoardScreen} /> : <></>}
    </View>
  )
}

export default Quiz;