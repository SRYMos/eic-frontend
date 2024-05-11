import React, { FC } from "react";
import { styles } from "./styles";
import { Image, TouchableOpacity, View } from "react-native";

interface QuestionProps {
  number: number;
  questionDesc: string;
  choice: string[];
  answer: string;
  answerSelected: (answer: string) => void;
  correct: string;
}

const Question: FC<QuestionProps> = ({ number, questionDesc, choice, answerSelected, answer, correct }) => {

  return (
    <View style={styles.container}>
      <View style={styles.questionBox}>
        <View style={styles.number}>{number}</View>
        <View style={styles.questionDesc}>{questionDesc}</View>
      </View>
      <View style={styles.choiceBox}>
        {choice.map((c, index) => {
          return (
            <TouchableOpacity key={index} style={styles.choice} onPress={() => answerSelected(c)} disabled={correct == "0" || correct == "1"}>
              <View style={answer == "" || c != answer ? styles.choiceNo : correct == "1" ? styles.choiceNoCorrect : styles.choiceNoIncorrect}>{(index + 10).toString(36).toUpperCase()}</View>
              <View style={styles.choiceDesc}>{c}</View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

export default Question;