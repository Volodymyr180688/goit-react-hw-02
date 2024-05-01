import css from './Options.module.css'

export default function Options({ updateFeedback, totalFeedback }) {
  const handleFeedback = (type) => {
    updateFeedback(type);
  };

  const handleReset = () => {
    updateFeedback('good', 0);
    updateFeedback('neutral', 0);
    updateFeedback('bad', 0);
  };

  return (
    <div className={css.buttonList}>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}