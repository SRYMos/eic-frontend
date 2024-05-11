import React, { FC, useEffect, useState } from "react";
import { styles } from "./styles";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface SummaryProps {
  toScoreBoardScreen: (open: boolean, name: string, score: number) => void;
  refNo: string;
  scoreboard: {
    refNo: string;
    name: string;
    score: number;
  }[]
}

const ScoreBoard: FC<SummaryProps> = ({ toScoreBoardScreen, refNo, scoreboard }) => {

  return (
    <TouchableOpacity onPress={() => toScoreBoardScreen(false, '', 0)} style={styles.container}>
      <View style={styles.buttonLogo}>
        <Image
          style={styles.logo}
          source={require('./../../../assets/logo2.png')}
        />
      </View>
      <View style={{ width: '100%' }}>
        <Text style={styles.title}>Scoreboard</Text>
      </View>
      <View style={{ width: '100%', height: '75%', overflow: 'scroll' }}>
        {scoreboard.map((sb, index) => {
          return <View key={index} style={sb.refNo == refNo ? styles.scoreLineOwner : styles.scoreLine}>
            <View style={styles.name}>{sb.name}</View>
            <View style={styles.score}>{sb.score}</View>
          </View>
        })}
      </View>
    </TouchableOpacity>
  )
}

export default ScoreBoard;