export default QuestionPart = (props) => {
  let { data, isOptionSelected, checkAns } = props;
  let {
    question,
    type,
    id,
    answer
  } = data;
  let choices = data.choices;
  return (
    <div>
      <div className="question">
        {question}
      </div>
      <div className="mca">
        <ul>
          {
            choices.map((choice) => {
              return (
                <li key={id + choice}>
                  <label className={checkAns && choice == answer ? 'text-success' : ''} onClick={() => isOptionSelected()}>
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