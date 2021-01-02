import { SinglePlayer } from '../index.types';
import { Constants } from '../common/constants';

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * Constants.MAX_NUM + Constants.MIN_NUM);
}

export const mapRandomScore = (playersData: SinglePlayer[]) => {
  const updatedData = playersData.map(player => {
    return {
      ...player,
      score: generateRandomNumber()
    };
  }).sort((a, b) => b.score - a.score);
  return updatedData;
}