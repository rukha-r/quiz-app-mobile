import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../Styles";

const AnswerComponent = ({ answer, correct, next, isCorrect }) => {
  return (
    <TouchableOpacity style={styles.answer_wrapper} onPress={correct ? isCorrect : next}>
      <Text style={styles.answer}>
        {answer}
      </Text>
    </TouchableOpacity>
  );
};

export default AnswerComponent;
