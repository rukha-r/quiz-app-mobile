import { StyleSheet } from "react-native";

const main_bg_color = "#242A39";
const text_color = "#C4FFFF";
const secondary_color = "#0F3D53";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: main_bg_color,
  },
  component_holder: {
    marginBottom: '-25%'
  },
  question_left: {
    fontSize: 45,
    color: text_color,
    textAlign: "center",
    marginTop: -100,
  },
  question_wrapper: {
    height: '20%',
    width: 310,
    padding: 25,
    borderWidth: 3,
    borderRadius: 30 / 2,
    borderColor: text_color,
    backgroundColor: secondary_color,
  },
  span: {
    fontSize: 55,
  },
  question: {
    fontSize: 20,
    color: text_color,
    fontWeight: "bold",
    textAlign: "center",
  },
  answer_part: {
    marginTop: 50,
  },
  answer_wrapper: {
    width: 300,
    height: 55,
    margin: 5,
    borderWidth: 2,
    borderRadius: 30 / 2,
    borderColor: text_color,
  },
  answer: {
    padding: 10,
    fontSize: 23,
    color: text_color,
    textAlign: "center",
  },
  final_score: {
    color: text_color,
    fontSize: 30,
  },
  congrat: {
    fontSize: 20,
    color: text_color,
    textAlign: "center",
  },
  footer: {
    bottom: 40,
    opacity: 0.4,
    fontSize: 17,
    color: text_color,
    textAlign: "center",
    position: "absolute",
  },
});

export default styles;
