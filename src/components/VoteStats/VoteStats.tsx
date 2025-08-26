import type { Votes } from "../../types/votes";
import { Notification } from "../Notification/Notification";
import css from "./VoteStats.module.css";
interface VoteStatsProps {
votes: Votes;
}

export function VoteStats ({votes}: VoteStatsProps) {
    const total = votes.good + votes.neutral + votes.bad;
    const positive =  Math.floor(votes.good / total * 100) || 0;
    return total === 0 ? (<Notification />) : (
<div className={css.container}>
  <p className={css.stat}>Good: <strong>{votes.good}</strong></p>
  <p className={css.stat}>Neutral: <strong>{votes.neutral}</strong></p>
  <p className={css.stat}>Bad: <strong>{votes.bad}</strong></p>
  <p className={css.stat}>Total: <strong>{total}</strong></p>
  <p className={css.stat}>Positive: <strong>{positive}%</strong></p>
</div>
    );


}
