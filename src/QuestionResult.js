
import React from 'react';

function QuestionResult(props) {
    // WhatsApp message including score and total score
    const shareMessage = `I scored ${props.score} out of ${props.totalScore} on this quiz! Can you beat my score?`;

    // WhatsApp share URL
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;

    return (
        <>
            <div className="show-score">
                <p>Your Score: {props.score}</p>
                <p>Total Score: {props.totalScore}</p>
                <button id="next-button" onClick={props.tryAgain}>Try Again</button>

                {/* WhatsApp Share Button */}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <button id="whatsapp-share-button">Share on WhatsApp</button>
                </a>
            </div>
        </>
    );
}

export default QuestionResult;
