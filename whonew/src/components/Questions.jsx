import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
export default function Questions() {
  const [questionIndex, setQuestionIndex] = useState(0);

  function onNext() {
    setQuestionIndex((prevIndex) => Math.min(prevIndex + 1, Quiz.Data.length - 1));
  }

  function onPrev() {
    setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  return (
    <div>
      <div className="container shadow my-5" style={{ maxWidth: '800px' }}>
        <div className="row justify-content-end d-flex flex-column align-items-center text-white justify-content-center form">
          <Quiz questionIndex={questionIndex} onNext={onNext} onPrev={onPrev} />
        </div>
      </div>
    </div>
  );
}
