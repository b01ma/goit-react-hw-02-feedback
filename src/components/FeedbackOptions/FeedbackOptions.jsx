import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.container}>
      {options?.map(option => (
        <li key={option} className={css.item}>
          <button name={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
