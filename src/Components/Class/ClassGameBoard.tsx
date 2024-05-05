import { Component } from "react";
import "./styles/game-board.css";
import { TUserScore } from "../../types";
import { initialFishes } from "../../constants/fishData";

const correctList: string[] = [];
const incorrectList: string[] = [];
type State = {
  userInput: string;
};

export class ClassGameBoard extends Component<
  { userScore: (score: TUserScore) => void },
  State
> {
  state = {
    userInput: "",
  };
  userScore = this.props.userScore;
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ userInput: e.currentTarget.value });
  };
  render() {
    let nextFishToName = initialFishes[0];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({ userInput: "" });
            if (nextFishToName.name === this.state.userInput) {
              correctList.push(nextFishToName.name);
            } else {
              incorrectList.push(nextFishToName.name);
            }
            this.userScore({
              correct: correctList.length,
              incorrect: incorrectList.length,
            });

            if (correctList.length + incorrectList.length <= 3) {
              initialFishes.splice(0, 1);
              nextFishToName = initialFishes[0];
            } else {
              this.userScore({
                correct: correctList.length,
                incorrect: incorrectList.length,
              });
            }
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.userInput}
            onChange={this.onChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
