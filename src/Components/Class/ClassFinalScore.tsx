import { Component } from "react";
import { TUserScore } from "../../types";
export class ClassFinalScore extends Component<{ userScore: TUserScore }> {
  render() {
    const correct = this.props.userScore.correct;
    const totalScore =
      this.props.userScore.correct + this.props.userScore.incorrect;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correct}</p>
          <hr />
          <p>{totalScore}</p>
        </div>
      </div>
    );
  }
}
