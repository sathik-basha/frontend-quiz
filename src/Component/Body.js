import { useEffect, useState } from "react";
import Questions from "./Questions";
import axios from 'axios';
import { getData } from '../data/api';


const PreviousNextSection = (props) => {
  let { questionNo } = props;
  let canDisablePrevious = questionNo == 0;
  let canDisableNext = questionNo == 9;
  return (
    <div className="previous-next-container">
      <div className="previous" onClick={() => props.prevOrNext(--questionNo)}>
        <button disabled={canDisablePrevious}>Previous</button>
      </div>
      <div className="previous" onClick={() => props.prevOrNext(++questionNo)}>
        <button disabled={canDisableNext}>Next</button>
      </div>
    </div>
  )
}

const Body = () => {
  let [questionsList, setQuestionsList] = useState({});
  let [questionNo, setQuestionNo] = useState(0);

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
  }
  let data = questionsList?.data && questionsList.data[questionNo] || {};
  return (
    <div className="body-container">
      <div className="result-container">
        Results:
        <span>0/{questionsList?.data?.length || 0}</span>
      </div>
      {
        data.question && (
          <div className="qa-part">
            <Questions data={data} questionNo={questionNo}/>
            <PreviousNextSection questionNo={questionNo} prevOrNext={(e) => prevOrNext(e)}/>
          </div>
        )
      }
    </div>
  )
}
export default Body;