import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";
import { TUserScore } from "./FunctionalApp";

// eslint-disable-next-line react-refresh/only-export-components
export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];
const correctList: string[] = [];
const incorrect: string[] = [];
export function FunctionalGameBoard({
  userScore,
}: {
  userScore: (score: TUserScore) => void;
}) {
  let nextFishToName = initialFishes[0];
  const [userInput, setUserInput] = useState("");
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          setUserInput("");
          if (nextFishToName.name === userInput) {
            correctList.push(nextFishToName.name);
          } else {
            incorrect.push(nextFishToName.name);
          }
          userScore({
            correct: correctList.length,
            incorrect: incorrect.length,
            gameOver: false,
            totalScore: correctList.length + incorrect.length,
          });
          if (correctList.length + incorrect.length <= 3) {
            initialFishes.splice(0, 1);
            nextFishToName = initialFishes[0];
          } else {
            userScore({
              correct: correctList.length,
              incorrect: incorrect.length,
              gameOver: true,
              totalScore: correctList.length + incorrect.length,
            });
          }
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
