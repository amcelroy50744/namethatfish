import { TUserScore } from "./FunctionalApp";
import "./styles/final-score.css";

export const FunctionalFinalScore = (userScore: {
  userScore: TUserScore | null;
}) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{userScore.userScore?.correct}</p>
      <hr />
      <p>{userScore.userScore?.totalScore}</p>
    </div>
  </div>
);
