export default QuestionPart = (props) => {
  let { questionNo, data } = props;
  let {
    question,
    choices = [],
    type
  } = data;
  return (
    <div>
      <div className="question">
        {++questionNo}, {question}
      </div>
      <div className="mca">
        <ul>
          {
            choices.map((choice, index) => {
              return (
                <li key={index}>
                  <label>
                    <input type="radio" value={choice} name={type}/>
                    {choice}
                  </label>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
};