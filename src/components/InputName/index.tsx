import React, { FC, useEffect, useState } from "react";
import { styles } from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface SummaryProps {
  startGame: (name: string) => void;
}

const InputName: FC<SummaryProps> = ({ startGame }) => {
  const [name, setName] = useState<string>("");

  return (
    <View style={styles.container}>
      <View>
        <TextInput onChangeText={setName} value={name} style={styles.input}></TextInput>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => startGame(name)} disabled={!name}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default InputName;