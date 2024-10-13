import { Input, RankBoard } from '@rankit/ui/index';
import {
  boardStyle,
  divStyle,
  container,
  heading1Style,
  heading2Style,
  inputStyle,
  paragraphStyle,
} from './schoolPage.css';

const SchoolPage = () => {
  return (
    <div className={container}>
      <div className={divStyle}>
        <h1 className={heading1Style}>학교 랭킹</h1>

        <h2 className={heading2Style}>
          대학교별
          <br />
          rankit 순위를
          <br />
          알아보아요.
        </h2>

        <p className={paragraphStyle}>
          학교명을 눌러서
          <br />
          교내 유저들의
          <br />
          순위를 볼 수 있어요.
        </p>

        <Input
          device="mobile"
          variant="search"
          placeholder="대학교 검색"
          className={inputStyle}
        />

        <RankBoard device="mobile" className={boardStyle} />
      </div>
    </div>
  );
};

export default SchoolPage;
