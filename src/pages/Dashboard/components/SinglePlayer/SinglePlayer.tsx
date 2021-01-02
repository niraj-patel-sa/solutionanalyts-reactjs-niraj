import { FC } from "react";
import { ListElementContainer, ListElement } from '../../StyledComponent';
import { SinglePlayerProps } from '../../Dashboard.type';

const SinglePlayer: FC<SinglePlayerProps> = (props) => {
  return (
    <ListElementContainer>
      <ListElement>{props.displayName}</ListElement>
      <ListElement>{props.picture}</ListElement>
      <ListElement>{props.score}</ListElement>
    </ListElementContainer>
  )
}

export default SinglePlayer;