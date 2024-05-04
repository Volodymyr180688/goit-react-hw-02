export default function Feedback({feedback, totalFeedback, positiveFeedback}) {
    return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalFeedback}</p>
            {positiveFeedback ? <p>Positive: {positiveFeedback}%</p> : <p>Positive: 0%</p>}
            
        </div>
    )
}