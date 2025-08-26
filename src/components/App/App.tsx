import { useState } from "react";
import type { Votes, VoteType } from "../../types/votes";
import CafeInfo from "../CafeInfoGG/CafeInfo";
import { VoteOptions } from "../VoteOptions/VoteOptions";
import { VoteStats } from "../VoteStats/VoteStats";
import css from "./App.module.css";

// сюда позже добавим VoteOptions и VoteStats

export default function App() {
  // состояние голосов
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // функция для добавления голоса
  const handleVote = (type: VoteType) => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1, // увеличиваем нужный ключ
    }));
  };

  // функция для сброса голосов
  const resetVotes = ():void => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
  <div className={css.app}>
    <CafeInfo />
    <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={Boolean(votes.good || votes.neutral || votes.bad)}/>
    <VoteStats votes={votes}/>
  </div>
);
}
