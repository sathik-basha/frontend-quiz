import { useEffect, useState } from "react";
import Questions from "./Questions";
import axios from 'axios';
import { getData } from '../data/api';


const BtnContainer = (props) => {
  let { questionNo, showAnswerBtn, checkAnswer } = props;
  let canDisablePrevious = questionNo == 0;
  let canDisableNext = questionNo == 9;
  return (
    <div className="previous-next-container">
      <div className="previous" onClick={() => props.prevOrNext(--questionNo)}>
        <button disabled={canDisablePrevious}>Previous</button>
      </div>
      <div className="d-flex">
        <div className={showAnswerBtn ? 'answer-btn' : 'd-none'}>
        <button onClick={() => checkAnswer()}>Check Answer</button>
        </div>
        <div className="previous" onClick={() => props.prevOrNext(++questionNo)}>
          <button disabled={canDisableNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

const Body = () => {
  let [questionsList, setQuestionsList] = useState({});
  let [questionNo, setQuestionNo] = useState(0);
  let [showAnsBtn, setShowAnsBtn] = useState(false);
  let [checkAns, setCheckAnswer] = useState(false);

  useEffect(() => {
    axios(getData)
    .then(function (response) {
      setQuestionsList(response?.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  function prevOrNext(param) {
    setQuestionNo(param);
    setShowAnsBtn(false);
    setCheckAnswer(false);
  }

  function isOptionSelected() {
    setShowAnsBtn(true);
  }

  function checkAnswer() {
    setCheckAnswer(true);
  }

  let data = questionsList?.data && questionsList.data[questionNo] || {};
  let qCountList = questionsList?.data?.length;
  return (
    <div className="body-container">
      <div className="result-container">
        Questions:
        {
          qCountList 
          && <span>{questionNo + 1}/{qCountList}</span>
          || <span>0</span>
        }
      </div>
      {
        data.question && (
          <div className="qa-part">
            <Questions data={data} isOptionSelected={isOptionSelected} checkAns={checkAns}/>
            <BtnContainer 
              questionNo={questionNo} 
              showAnswerBtn={showAnsBtn}  
              prevOrNext={(e) => prevOrNext(e)}
              checkAnswer={checkAnswer}
            />
          </div>
        )
      }
    </div>
  )
}
export default Body;