import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { TUserScore } from "../../types";
export class ClassApp extends Component {
  state: TUserScore = {
    correct: 0,
    incorrect: 0,
  };

  render() {
    const fishIndexClass: number = this.state.correct + this.state.incorrect;
    const isGameOver: boolean = fishIndexClass >= 4;
    return (
      <>
        {isGameOver ? (
          <ClassFinalScore userScore={this.state} />
        ) : (
          <>
            <ClassScoreBoard userScore={this.state} />
            <ClassGameBoard
              userScore={(userScore) => {
                this.setState(userScore);
              }}
            />
          </>
        )}
      </>
    );
  }
}
