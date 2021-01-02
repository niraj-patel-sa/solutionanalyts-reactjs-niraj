export interface SinglePlayerProps {
  userID: string,
  displayName: string;
  picture: string;
  score: number;
  rank: number;
}

export interface SinglePlayer {
  userID: string,
  displayName: string;
  picture: string;
  score: number;
}

export interface PlayersListProps {
  players: SinglePlayer[];
}