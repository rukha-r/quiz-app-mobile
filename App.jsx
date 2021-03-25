import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./Styles";
import questions from "./data";
import QuizComponent from "./components/QuizComponent";
import FinalComponent from "./components/FinalComponent";

export default function App() {
  const length = questions.length;
  const [index, setIndex] = useState(0);
  const [correct_answers, setCorrect] = useState(0);
  const next = () => setIndex(index + 1);
  const isCorrect = () => {
    setCorrect(correct_answers + 1);
    setIndex(index + 1);
  };
  const reset = () => {
    setIndex(0);
    setCorrect(0);
  };
  return (
    <SafeAreaView style={styles.body}>
      {index > length - 1 ? (
        <FinalComponent
          length={length}
          correct_answers={correct_answers}
          reset={reset}
        />
      ) : (
        <QuizComponent
          next={next}
          isCorrect={isCorrect}
          index={index}
          length={length}
          question={questions[index].question}
          answers={questions[index].answers}
        />
      )}
      <Text style={styles.footer}>by@rukha-r</Text>
    </SafeAreaView>
  );
}
