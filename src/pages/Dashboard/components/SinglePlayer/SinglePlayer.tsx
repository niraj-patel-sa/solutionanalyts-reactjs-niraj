import React, { FC } from "react";
import { ListElementContainer, NameElement, RankElement, PictureElement } from '../../StyledComponent';
import { SinglePlayerProps } from '../../../../index.types';
import { Score } from '../../components';

const SinglePlayer: FC<SinglePlayerProps> = (props) => {
  return (
    <ListElementContainer>
      <RankElement rank={props.rank}>{props.rank + 1}</RankElement>
      <PictureElement>{props.picture}</PictureElement>
      <NameElement>{props.displayName}</NameElement>
      <Score score={props.score} />
    </ListElementContainer>
  )
}

export default SinglePlayer;