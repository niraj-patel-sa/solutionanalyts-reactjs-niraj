import { FC } from "react";
import { ListContainer } from '../../StyledComponent';
import { PlayersListProps } from '../../../../index.types';
import { SinglePlayer } from '../../components';

const PlayersList: FC<PlayersListProps> = (props) => {
  return (
    <ListContainer>
      {
        props.players && props.players.length > 0
        && props.players.map((player, index) => {
          return <SinglePlayer
            displayName={player.displayName}
            score={player.score}
            picture={player.picture}
            userID={player.userID}
            rank={index}
            key={index}
          />
        })
      }
    </ListContainer>
  )
};

export default PlayersList;