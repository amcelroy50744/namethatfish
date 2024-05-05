import { Component } from "react";
import "./styles/score-board.css";
import { TUserScore } from "../../types";
import { initialFishes } from "../../constants/fishData";
export class ClassScoreBoard extends Component<{ userScore: TUserScore|null }> {
  render() {
    const correct = this.props.userScore?.correct || 0;
    const incorrect = this.props.userScore?.incorrect || 0;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrect}</div>
        <div id="choices-left">
          {initialFishes.map((answer) => (
            <div key={answer.name} className="choice">
              {answer.name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correct}</div>
      </div>
    );
  }
}
