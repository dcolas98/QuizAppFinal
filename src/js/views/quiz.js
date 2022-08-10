import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";

export const Quiz = () => {
  const { store, actions } = React.useContext(Context);
  const [question, setQuestion] = React.useState("");
  function getQuestion() {
    setQuestion(store.questionList.results[1].question);
    
  }

  return (
    <>
    <div>
      <p>{question}</p>
      <Button onClick={getQuestion}>Next Question</Button>
      </div>
      <div>
      <Button>true</Button>
<Button>false</Button>
    </div>
    </>
  );
};