import React from 'react';
import styles from './FeedbackOptions.module.css'
class FeedbackOptions extends React.Component{
    render(){
        const {onLeaveFeedback} = this.props;
        return(
            <div>
                <button onClick={onLeaveFeedback} data-action="good" className={styles.button}>Good</button>
                <button onClick={onLeaveFeedback} data-action="neutral"  className={styles.button}>Neutral</button>
                <button onClick={onLeaveFeedback} data-action="bad" className={styles.button}>Bad</button>
            </div>
        )
    }
}
export default FeedbackOptions;