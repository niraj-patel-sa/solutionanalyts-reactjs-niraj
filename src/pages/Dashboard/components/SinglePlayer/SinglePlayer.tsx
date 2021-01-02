import { FC } from "react";
import { ListElementContainer, NameElement, ScoreElement, RankElement } from '../../StyledComponent';
import { SinglePlayerProps } from '../../Dashboard.type';

const SinglePlayer: FC<SinglePlayerProps> = (props) => {
  return (
    <ListElementContainer>
      <RankElement>{props.rank + 1}</RankElement>
      <NameElement>{props.displayName}</NameElement>
      {/* <ListElement>{props.picture}</ListElement> */}
      <ScoreElement>{props.score}</ScoreElement>
    </ListElementContainer>
  )
}

export default SinglePlayer;