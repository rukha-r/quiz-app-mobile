import React from "react";
import styles from "../Styles";
import { Text, SafeAreaView, Button } from "react-native";

export default function FinalComponent({ correct_answers, length, reset }) {
  return (
    <SafeAreaView>
      <Text style={styles.congrat}>
        {correct_answers > length / 2
          ? "...Congratulations..."
          : "...You could do better..."}
      </Text>
      <Text style={styles.final_score}>
        You scored {correct_answers} out of {length}
      </Text>
      <Button title="Try again" onPress={reset} />
    </SafeAreaView>
  );
}
