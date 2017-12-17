import React from 'react'
import './Answers.css'

const Answer = ({ text, checkAnswer }) => <button className="component component-answer" onClick={() => checkAnswer(text)}>{ text }</button>

const Answers = ({ answers, checkAnswer }) => (
	<div className="component component-answers">
		{ answers.map((answer, i) => <Answer key={i} text={answer} checkAnswer={checkAnswer} />) }
	</div>
)

export default Answers 