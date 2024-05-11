import React, { FC, useEffect, useState } from "react";
import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

interface SummaryProps {
  score: number;
  toScoreBoardScreen: (open: boolean) => void;
}

const Summary: FC<SummaryProps> = ({ score, toScoreBoardScreen }) => {

  return (
    <TouchableOpacity onPress={() => toScoreBoardScreen(true)} style={styles.container}>
      <View>
        <Text style={styles.title}>Your Scores</Text>
      </View>
      <View>
        <Text style={styles.score}>{score}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Summary;