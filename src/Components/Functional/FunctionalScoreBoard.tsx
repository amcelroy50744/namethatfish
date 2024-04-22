import { TUserScore } from "./FunctionalApp";
import { initialFishes } from "./FunctionalGameBoard";
import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({
  userScore,
}: {
  userScore: TUserScore | null;
}) {
  const correct = userScore?.correct || 0;
  const incorrect = userScore?.incorrect || 0;
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
