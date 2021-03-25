import React from "react";
import styles from "../Styles";
import { View, Text } from "react-native";
import AnswerComponent from "./AnswerComponent";

function QuizComponent({ question, answers, next, index, length, isCorrect }) {
  return (
    <View style={styles.component_holder}>
      <View style={styles.header}>
        <Text style={styles.question_left}>
          Question <Text style={styles.span}>{index + 1}</Text>/{length}
        </Text>
      </View>
      <View style={styles.question_wrapper}>
        <Text style={styles.question}>{question}</Text>
      </View>
      <View style={styles.answer_part}>
        {answers.map((answers) => (
          <AnswerComponent
            answer={answers.answer}
            next={next}
            correct={answers.correct}
            isCorrect={isCorrect}
            key={Math.round(Math.random(200000) * 33333)}
          />
        ))}
      </View>
    </View>
  );
}

export default QuizComponent;
