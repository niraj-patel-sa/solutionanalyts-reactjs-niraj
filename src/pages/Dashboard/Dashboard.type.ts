export interface SinglePlayerProps {
  userID: string,
  displayName: string;
  picture: string;
  score: number;
}

export interface PlayersListProps {
  players: SinglePlayerProps[];
}