import { ChangeEvent } from 'react';
import { GetUserIntroduction } from '@/shared/apis/user/types';
import {
  headingTitleStyle,
  headingSubTitleStyle,
  paragraphContentStyle,
  contentDivStyle,
  contentStyle,
} from './introduction.css';

interface IntroductionProps {
  isEdit?: boolean;
  username?: string;
  title?: string;
  oneLiner?: string;
  goodAt?: string;
  learningGoal?: string;
  소개입력값: GetUserIntroduction.Res;
  on소개입력값변경: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const Introduction = ({
  isEdit = false,
  username,
  title,
  oneLiner,
  goodAt,
  learningGoal,
  소개입력값,
  on소개입력값변경,
}: IntroductionProps) => {
  const defaultValue = '//수정 버튼을 눌러 자기소개를 수정해주세요';

  const styleVariants = isEdit ? 'edit' : 'default';

  return (
    <div>
      {isEdit ? (
        <input
          name="title"
          value={소개입력값.title}
          onChange={on소개입력값변경}
          className={headingTitleStyle[styleVariants]}
        />
      ) : (
        <h1 className={headingTitleStyle[styleVariants]}>
          {title || defaultValue}
        </h1>
      )}

      <div className={contentDivStyle}>
        <div className={contentStyle}>
          <h2
            className={
              headingSubTitleStyle
            }>{`${username || '등록 중'}의 한줄 소개`}</h2>
          {isEdit ? (
            <input
              name="oneLiner"
              value={소개입력값.oneLiner}
              onChange={on소개입력값변경}
              className={paragraphContentStyle[styleVariants]}
            />
          ) : (
            <p className={paragraphContentStyle[styleVariants]}>
              {oneLiner || defaultValue}
            </p>
          )}
        </div>

        <div className={contentStyle}>
          <h2 className={headingSubTitleStyle}>저는 이런거를 잘해요.</h2>
          {isEdit ? (
            <input
              name="goodAt"
              value={소개입력값.goodAt}
              onChange={on소개입력값변경}
              className={paragraphContentStyle[styleVariants]}
            />
          ) : (
            <p className={paragraphContentStyle[styleVariants]}>
              {goodAt || defaultValue}
            </p>
          )}
        </div>

        <div className={contentStyle}>
          <h2 className={headingSubTitleStyle}>저는 이런걸 배우고 싶어요.</h2>
          {isEdit ? (
            <input
              name="learningGoal"
              value={소개입력값.learningGoal}
              onChange={on소개입력값변경}
              className={paragraphContentStyle[styleVariants]}
            />
          ) : (
            <p className={paragraphContentStyle[styleVariants]}>
              {learningGoal || defaultValue}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
