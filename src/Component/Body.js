import Questions from "./Questions";

const PreviousNextSection = () => {
  return (
    <div className="previous-next-container">
      <div className="previous">
        <button>Previous</button>
      </div>
      <div className="previous">
        <button>Next</button>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body-container">
      <div className="result-container">
        Results:
        <span>0/5</span>
      </div>
      <div className="qa-part">
        <Questions/>
        <PreviousNextSection/>
      </div>
    </div>
  )
}
export default Body;