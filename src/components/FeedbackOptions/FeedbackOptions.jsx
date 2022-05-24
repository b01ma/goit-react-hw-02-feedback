// import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        
      <ul>
        {options?.map(option =>
          <li key={option}>
            <button name={option} onClick={onLeaveFeedback} >{option}</button>
          </li>
        )}
        </ul>
   )
}

export default FeedbackOptions;
