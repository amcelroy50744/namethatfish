import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export type TUserScore = {
  correct: number;
  incorrect: number;
  gameOver: boolean;
  totalScore: number;
};
export function FunctionalApp() {
  const [userScore, setUserScore] = useState<TUserScore>({
    correct: 0,
    incorrect: 0,
    gameOver: false,
    totalScore: 0,
  });
  return (
    <>
      {userScore?.gameOver ? (
        <FunctionalFinalScore userScore={userScore} />
      ) : (
        <>
          <FunctionalScoreBoard userScore={userScore} />
          <FunctionalGameBoard
            userScore={(userScore) => {
              setUserScore(userScore);
            }}
          />
        </>
      )}
    </>
  );
}
