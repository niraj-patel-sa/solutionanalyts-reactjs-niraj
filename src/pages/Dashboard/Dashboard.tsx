import { FC, useEffect, useState } from "react";
import { PlayersList } from './components';
import sampleData from '../../common/sample-payload.json';
import { mapRandomScore } from '../../utils';
import { Constants } from '../../common/constants';

const Dashboard: FC = () => {
  const [players, setPlayers] = useState(sampleData);

  useEffect(() => {
    setInterval(() => {
      setPlayers(mapRandomScore)
    }, Constants.INTERVAL)
  }, [])
  return (
    <PlayersList players={players} />
  )
};

export default Dashboard;