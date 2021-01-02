import { FC } from "react";
import { ListContainer } from '../../StyledComponent';
import { PlayersListProps } from '../../Dashboard.type';
import { SinglePlayer } from '../../components';

const PlayersList: FC<PlayersListProps> = (props) => {
  return (
    <ListContainer>
      {
        props.players && props.players.length > 0
        && props.players.map(player => {
          return <SinglePlayer
            displayName={player.displayName}
            score={player.score}
            picture={player.picture}
            userID={player.userID}
          />
        })
      }
    </ListContainer>
  )
};

export default PlayersList;