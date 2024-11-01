import React, { useState } from "react";
import { QuizData } from "./QuizData";
import QuestionResult from "./QuestionResult";

function Question() {
    const [showResult, setShowResult] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0); // Reset the clicked option
        } else {
            setShowResult(true); // Show results if last question is answered
        }
    };

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    };

    return (
        <div>
            <p className="heading-txt">Quiz Application</p>
            <div className="container">
                {showResult ? (
                    <QuestionResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>

                        <div className="oprion-container">
                            {QuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        className={`option-btn ${clickedOption === i + 1 ? "checked" : null}`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        <button id="next-button" onClick={changeQuestion}>Next</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Question;
