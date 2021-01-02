import { FC } from "react";
import { PlayersList } from './components';
import sampleData from '../../common/sample-payload.json';

const Dashboard: FC = () => {
  return (
    <PlayersList players={sampleData} />
  )
};

export default Dashboard;