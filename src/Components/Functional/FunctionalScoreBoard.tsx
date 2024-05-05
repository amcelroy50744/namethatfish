import { TUserScore } from "../../types";
import "./styles/score-board.css";

export function FunctionalScoreBoard({
  userScore,
  answersLeft,
}: {
  userScore: TUserScore;
  answersLeft: string[];
}) {
  const correct = userScore?.correct || 0;
  const incorrect = userScore?.incorrect || 0;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrect}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correct}</div>
    </div>
  );
}
