import "./styles/game-board.css";
import { FormEvent, useState } from "react";
import { TFish } from "../../types";

export function FunctionalGameBoard({
  fishData,
  setUserScore,
}: {
  fishData: TFish;
  setUserScore: (propName: string) => void;
}) {
  const [userInput, setUserInput] = useState("");

  const handleAnswer = (answer: string) => {
    const propertyToUpdate: string =
      fishData.name === answer ? "correct" : "incorrect";
    setUserScore(propertyToUpdate);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAnswer(userInput);
    setUserInput("");
  }
    return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form
        id="fish-guess-form"
    onSubmit={handleSubmit}
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
