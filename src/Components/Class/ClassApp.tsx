import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { TUserScore } from "../Functional/FunctionalApp";

export class ClassApp extends Component {
  state: TUserScore = {
    correct: 0,
    incorrect: 0,
    gameOver: false,
    totalScore: 0,
  };
   
  render() {
    const {gameOver} = this.state;
    return (
      <>
        {gameOver ? (
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
