import {
  headingTitleStyle,
  headingSubTitleStyle,
  paragraphContentStyle,
  contentDivStyle,
  contentStyle,
} from './introduction.css';

const Introduction = () => {
  return (
    <div>
      <h1 className={headingTitleStyle}>
        {'//수정 버튼을 눌러 자기소개를 수정해주세요'}
      </h1>

      <div className={contentDivStyle}>
        <div className={contentStyle}>
          <h2 className={headingSubTitleStyle}>{'{jamooooong}의 한줄 소개'}</h2>
          <p className={paragraphContentStyle}>
            {'//수정 버튼을 눌러 자기소개를 수정해주세요.'}
          </p>
        </div>

        <div className={contentStyle}>
          <h2 className={headingSubTitleStyle}>저는 이런거를 잘해요.</h2>
          <p className={paragraphContentStyle}>
            {'//수정 버튼을 눌러 자기소개를 수정해주세요.'}
          </p>
        </div>

        <div className={contentStyle}>
          <h2 className={headingSubTitleStyle}>저는 이런걸 배우고 싶어요.</h2>
          <p className={paragraphContentStyle}>
            {'//수정 버튼을 눌러 자기소개를 수정해주세요.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
