// тип для ключей голосов
export type VoteType = 'good' | 'neutral' | 'bad';

// интерфейс для объекта голосов
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}
