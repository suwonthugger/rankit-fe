'use client';

import Link from 'next/link';
import CustomAlertDialog from '@/shared/components/alertDialog/AlertDialog';
import Button from '@/shared/components/button/button';
import ArrowBackIcon from '@/shared/assets/svgs/arrow_back.svg';
import {
  headingStyle,
  sectionStyle,
  paragraphStyle1,
  paragraphStyle2,
  subSectionStyle,
  subDivBetweenStyle,
  container,
  divStyle,
  topDivIconStyle,
  textBtnStyle,
} from './main-setting.css';

interface MainSettingProps {
  userSchool: string | undefined;
  userRegion: string | undefined;
}

const MainSetting = ({ userSchool, userRegion }: MainSettingProps) => {
  const handleLogOut = () => {
    console.log('로그아웃 확인 눌림');
    // 확인 버튼을 눌렀을 때의 동작을 정의
  };
  const handleDelAuth = () => {
    console.log('탈퇴하기 확인 눌림');
    // 확인 버튼을 눌렀을 때의 동작을 정의
  };
  return (
    <div className={container}>
      <div className={divStyle}>
        {/* heading */}
        <div className={topDivIconStyle}>
          <button>
            <ArrowBackIcon />
          </button>
          <p className={headingStyle}>설정</p>
        </div>

        {/* changeInfo */}
        <section className={sectionStyle}>
          <div className={subSectionStyle}>
            <div className={subDivBetweenStyle}>
              <p className={paragraphStyle1}>
                소속학교 == {userSchool || '학교 없음'}
              </p>
              <Link href="/school-setting">
                <Button>변경</Button>
              </Link>
            </div>
            <p className={paragraphStyle2}>
              재인증을 통해 소속학교를 변경할 수 있습니다.
            </p>
          </div>
          <div className={subSectionStyle}>
            <div className={subDivBetweenStyle}>
              <p className={paragraphStyle1}>
                소속지역 == {userRegion || '지역 없음'}
              </p>
              <Link href="/region-setting">
                <Button>변경</Button>
              </Link>
            </div>
            <p className={paragraphStyle2}>소속지역를 변경할 수 있습니다.</p>
          </div>
        </section>
        {/* user exit */}
        <section className={sectionStyle}>
          <div className={subSectionStyle}>
            <div className={subDivBetweenStyle}>
              <p className={paragraphStyle1}>서비스 로그아웃</p>
              <CustomAlertDialog
                variant="textBtn"
                att="yesOrNo"
                color="red"
                title="경고!"
                description={[
                  '로그아웃을 진행합니다.',
                  <br key="br" />,
                  '메인화면으로 돌아갑니다.',
                ]}
                cancelText="취소"
                confirmText="확인"
                triggerText="로그아웃"
                onConfirm={handleLogOut}
              />
            </div>
            <p className={paragraphStyle2}>
              서비스에서 로그아웃 합니다. 메인 화면으로 이동합니다.
            </p>
          </div>
          <div className={subSectionStyle}>
            <div className={subDivBetweenStyle}>
              <p className={paragraphStyle1}>서비스 탈퇴</p>
              <CustomAlertDialog
                variant="textBtn"
                att="yesOrNo"
                color="red"
                title="경고!"
                description={[
                  '탈퇴를 진행합니다.',
                  <br key="br" />,
                  '모든 정보가 삭제됩니다.',
                ]}
                cancelText="취소"
                confirmText="확인"
                triggerText="탈퇴하기"
                onConfirm={handleDelAuth}
              />
            </div>
            <p className={paragraphStyle2}>탈퇴 시 모든 정보는 삭제 됩니다.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSetting;
