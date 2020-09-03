import { ScoreBoard } from "./scoreBoard-done";

const scoreboard = new ScoreBoard("Lakers", "Celtics");

scoreboard.addPoints(2, true);
scoreboard.addPoints(3, false);
scoreboard.addPoints(1, true);
scoreboard.addPoints(1, true);

scoreboard.showScore();