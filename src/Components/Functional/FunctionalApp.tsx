import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../../constants/fishData";
import { TUserScore} from "../../types";

export function FunctionalApp() {
  const [userScore, setUserScore] = useState<TUserScore>({
    correct: 0,
    incorrect: 0,
  });

  const handleStateChange = (propName: string) => {
    setUserScore((prevState: TUserScore) => ({
      ...userScore,
      [propName]: prevState[propName as keyof typeof userScore] + 1,
    }));
  };

  const fishIndex: number = userScore.correct + userScore.incorrect;
  const isGameOver: boolean = fishIndex >= initialFishes.length;
  const answersLeft:string[] = initialFishes.map((fish) => fish.name).slice(fishIndex) 
  return (
    <>
      {isGameOver ? (
        <FunctionalFinalScore userScore={userScore} totalCount = {initialFishes.length}/>
      ) : (
        <>
          <FunctionalScoreBoard userScore={userScore} answersLeft={answersLeft}  />
          <FunctionalGameBoard
            fishData={initialFishes[fishIndex]}
            setUserScore={handleStateChange}
          />
        </>
      )}
    </>
  );
}
