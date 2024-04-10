import React, { useEffect, useState } from "react";
//import Data from "./Data";
import { NavLink, useNavigate } from "react-router-dom";
const Data = [
  {
    id: "0",
    question: "Do you get the kind of support from others that you need?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],
    marks:0,
  },
  {
    id: "1",
    question:
      "How much do you need any medical treatment to function in your daily life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "2",
    question: "How satisfied are you with your health?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "3",
    question:
      "To what extent do you feel that physical pain prevents you from doing what you need to do?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "4",
    question:
      "How much do you need any medical treatment to function in your daily life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "5",
    question: "How much do you enjoy life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "6",
    question: "To what extent do you feel your life to be meaningful?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "7",
    question: "How well are you able to concentrate?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "8",
    question: "How safe do you feel in your daily life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "9",
    question: "How healthy is your physical environment?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "10",
    question: "Do you have enough energy for everyday life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "11",
    question: "Are you able to accept your bodily appearance?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "12",
    question: "Have you enough money to meet your needs?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "13",
    question:
      "How available to you is the information that you need in your day-to-day life?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "14",
    question:
      "To what extent do you have the opportunity for leisure activities?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "15",
    question: "How well are you able to get around?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "16",
    question: "How satisfied are you with your sleep?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "17",
    question:
      "How satisfied are you with your ability to perform your daily living activities?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "18",
    question: "How satisfied are you with your capacity for work?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "19",
    question: "How satisfied are you with yourself?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "20",
    question: "How satisfied are you with your personal relationships?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "21",
    question:
      "How satisfied are you with the support you get from your friends?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "22",
    question: "How satisfied are you with the conditions of your living place?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "23",
    question: "How satisfied are you with your access to health services?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "24",
    question: "How satisfied are you with your mode of transportation?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
  {
    id: "25",
    question:
      "How often do you have negative feelings, such as blue mood, despair, anxiety, depression?",
    options: [
      { text: "Very poor", score: 1 },
      { text: "Poor", score: 2 },
      { text: "Neither poor nor good", score: 3 },
      { text: "Good", score: 4 },
      { text: "Very Good", score: 5 },
    ],marks:0,
  },
];

export default function Quiz() {
    //const navigate = useNavigate();
    const [questionIndex, setQuestionIndex] = useState(0);
    const [checked, setChecked] = useState(undefined);
    const [score, setScore] = useState(0);
    const questions = [...Data];
    const question = questions[questionIndex];
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => {
      console.log(question);
    }, [question]);
    
    function handleSubmit(){
      let totalScore = 0;
    for (let i = 0; i < questions.length; i++) {
      totalScore += questions[i].marks;
    }
    setScore(totalScore);
    console.log("Total Score:", totalScore);
    //navigate('/result');
    }
    function onSelect(i) {
      setChecked(i);
      question.marks = question.options[i].score;
      console.log(question.marks);
      
    }

    function handleNext() {
      if (checked !== undefined) {
        setChecked(undefined); // Reset the checked state
        setQuestionIndex((prevIndex) => Math.min(prevIndex + 1, Data.length - 1));
        
      } else {
        alert("Please select an option before moving to the next question.");
      }
    }
  
    function handlePrev() {
      setChecked(undefined); // Reset the checked state
      setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
    return (
        <div
        className="container shadow my-5 d-flex flex-column align-items-center"
        style={{ maxWidth: "800px" }}
      >
        <div className="questions text-center">
          <h4>{question.question}</h4>
          <ul key={question.id} className="list-unstyled">
            {question.options.map((q, i) => (
              <li key={i}>
                <button
                  className={`btn btn-light rounded-pill px-4 py-2 mb-3 me-auto w-50 ${
                    checked === i ? "selected" : ""
                  }`}
                  value={false}
                  name="options"
                  id={`q${i}-option`}
                  onClick={() => onSelect(i)}
                >
                  <label className="text-primary" htmlFor={`q${i}-option`}>
                    {q.text}
                  </label>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="buttons d-flex justify-content-center mt-3">
          <button
            className="btn btn-outline-light rounded-pill px-4 py-2 mb-3 me-auto"
            onClick={handlePrev}
            disabled={questionIndex === 0}
            
          >
            Previous
          </button>
          {questionIndex === Data.length - 1 ? (
          <button
            className="btn btn-outline-light rounded-pill px-4 py-2 mb-3 ms-auto"
            onClick={handleSubmit}
            disabled={checked === undefined}
          >
            Submit
          </button>
        ) : (
          <button
            className="btn btn-outline-light rounded-pill px-4 py-2 mb-3 ms-auto"
            onClick={handleNext}
            disabled={checked === undefined}
          >
            Next
          </button>
        )}
        </div>
      </div>
    );
  }