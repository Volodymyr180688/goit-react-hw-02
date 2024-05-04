import style from './Options.module.css';

export default function Options({updateFeedback, resetFeedback, totalFeedback}) {
    const handleFeedback = (feedbackType) => {
    updateFeedback(feedbackType);
  };

      return (
    <div className={style.buttonList}>
      <button onClick={()=>handleFeedback('good')}>Good</button>
      <button onClick={()=>handleFeedback('neutral')}>Neutral</button>
      <button onClick={()=>handleFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    
    </div>
  );
}
