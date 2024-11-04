import Input from '@/shared/components/input/input';
import Board from './_components/board';
import {
  divStyle,
  container,
  heading2Style,
  inputStyle,
  paragraphStyle,
  heading1Style,
} from './boardPage.css';

const SchoolPage = () => {
  return (
    <div className={container}>
      <div className={divStyle}>
        <h1 className={heading1Style}>보드</h1>
        <p className={paragraphStyle}>
          rankit의 모든 유저들이 자유롭게 소통하는 공간입니다.
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
