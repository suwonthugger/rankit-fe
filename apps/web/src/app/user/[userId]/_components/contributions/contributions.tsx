import Image from 'next/image';
import {
  contributionDivStyle,
  contributionTableHeadingStyle,
} from './contributions.css';

interface ContributionsProps {
  userName: string;
}

const Contributions = ({ userName }: ContributionsProps) => {
  return (
    <div className={contributionDivStyle}>
      <h3 className={contributionTableHeadingStyle}>Contributions</h3>
      <Image
        width={1071}
        height={168}
        src={`https://ghchart.rshah.org/1050ff/${userName}`}
        alt="깃허브 모내기 사진"
      />
    </div>
  );
};

export default Contributions;
