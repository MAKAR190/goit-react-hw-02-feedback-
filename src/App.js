import React from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage=()=> {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  }

  onLeaveFeedback = ({ target }) => {
    if (target.dataset.action === "good") {
      this.setState((prevState, prevProps) => {
        return {
          good: prevState.good + prevProps.step,
        };
      });
    } else if (target.dataset.action === "neutral") {
      this.setState((prevState, prevProps) => {
        return {
          neutral: prevState.neutral + prevProps.step,
        };
      });
    } else {
      this.setState((prevState, prevProps) => {
        return {
          bad: prevState.bad + prevProps.step,
        };
      });
    }
  };
  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback.bind(this)} />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
