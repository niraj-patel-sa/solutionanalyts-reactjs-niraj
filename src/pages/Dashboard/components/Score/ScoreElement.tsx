import { FC } from "react";
import { ScoreContainer, ScoreElement } from '../../StyledComponent';

const Score: FC<{ score: number }> = (props) => {
  return (
    <ScoreContainer>
      <ScoreElement>{props.score}pt</ScoreElement>
    </ScoreContainer>
  )
};

export default Score;