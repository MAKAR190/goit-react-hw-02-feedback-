import React from "react";
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";
class FeedbackOptions extends React.Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div>
        <button
          onClick={onLeaveFeedback}
          data-action="good"
          className={styles.button}
        >
          Good
        </button>
        <button
          onClick={onLeaveFeedback}
          data-action="neutral"
          className={styles.button}
        >
          Neutral
        </button>
        <button
          onClick={onLeaveFeedback}
          data-action="bad"
          className={styles.button}
        >
          Bad
        </button>
      </div>
    );
  }
}
export default FeedbackOptions;
