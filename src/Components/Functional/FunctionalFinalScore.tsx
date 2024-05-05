import "./styles/final-score.css";
import { TUserScore } from "../../types";

export const FunctionalFinalScore = ({
  userScore,
  totalCount,
}: {
  userScore: TUserScore;
  totalCount: number;
}) =>  (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{userScore.correct}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
