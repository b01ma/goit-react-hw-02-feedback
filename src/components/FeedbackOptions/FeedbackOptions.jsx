// import css from './FeedbackOptions.module.css';

const FeedbackOptions = (props) => {
    return (
        
        <ul>
          <li>
            <button name='good' onClick={props} >Good</button>
          </li>
          <li>
            <button name='neutral' onClick={props} >Neutral</button>
          </li>
          <li>
            <button name='bad' onClick={props} >Bad</button>
          </li>
        </ul>
   )
}

export default FeedbackOptions;