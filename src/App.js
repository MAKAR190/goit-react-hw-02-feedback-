import React from 'react';
import './App.css';
import Section from "./components/Section/Section"
import Statistics from './components/Statistics/Statistics'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
class App extends React.Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
 
  countTotalFeedback(){
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPositiveFeedbackPercentage(){
    if(this.countTotalFeedback() === 0){
      return 0;
    }else{
      return Math.round(this.state.good/this.countTotalFeedback() * 100);
    }
  }

  onLeaveFeedback(){
 this.setState((prevState)=>
{ return {
     good: prevState.good += 1,
}});
  }
  render(){
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions step={1} onLeaveFeedback={this.onLeaveFeedback}/>
            <Statistics good={this.state.good} bad={this.state.bad} neutral={this.state.neutral} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
      </Section>
    );
  }

}

export default App;
