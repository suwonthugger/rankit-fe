import { Input, RankBoard } from '@rankit/ui/index';
import {
  boardStyle,
  divStyle,
  container,
  heading1Style,
  heading2Style,
  inputStyle,
  paragraphStyle,
} from './regionPage.css';

const SchoolPage = () => {
  return (
    <div className={container}>
      <div className={divStyle}>
        <h1 className={heading1Style}>지역 랭킹</h1>

        <h2 className={heading2Style}>
          지역별
          <br />
          rankit 순위를
          <br />
          확인해보세요.
        </h2>

        <p className={paragraphStyle}>
          지역명을 눌러서
          <br />
          지역내 유저들의
          <br />
          순위를 볼 수 있어요.
        </p>

        <Input
          device="mobile"
          variant="search"
          placeholder="지역 검색"
          className={inputStyle}
        />

        <RankBoard device="mobile" className={boardStyle} />
      </div>
    </div>
  );
};

export default SchoolPage;
