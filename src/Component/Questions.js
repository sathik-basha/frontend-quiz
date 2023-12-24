export default QuestionPart = () => {
  return (
    <div>
      <div className="question">
        1. is Node.js using which engine?
      </div>
      <div className="mca">
        <ul>
          <li>
            <input type="radio" name="qa" value="chakra"/>
            Chakra from Safari
          </li>
          <li>
            <input type="radio" name="qa" value="SpiderMonkey"/>
            SpiderMonkey from Firefox
          </li>
          <li>
            <input type="radio" name="qa" value="v8"/>
            v8 from Chrome
          </li>
        </ul>
      </div>
    </div>
  )
};