import { Input } from '@rankit/ui/index';
import Board from './_components/board';
import {
  divStyle,
  container,
  heading2Style,
  inputStyle,
  paragraphStyle,
} from './boardPage.css';

const SchoolPage = () => {
  return (
    <div className={container}>
      <div className={divStyle}>
        <h2 className={heading2Style}>
          고지를
          <br />
          선점하기 위해
          <br />
          싸워라.
        </h2>

        <p className={paragraphStyle}>
          rankit의 모든 유저들이
          <br />
          자유롭게 소통하는 공간입니다.
          <br />
          부적절한 멘트는 지양해주세요.
        </p>

        <Input
          device="mobile"
          variant="search"
          placeholder="enter을 입력해서 등록합니다."
          className={inputStyle}
        />

        <Board />
      </div>
    </div>
  );
};

export default SchoolPage;
