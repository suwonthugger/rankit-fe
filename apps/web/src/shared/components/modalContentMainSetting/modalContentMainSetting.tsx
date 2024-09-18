import { Button } from '@rankit/ui';
import Link from 'next/link';
import {
  headingStyle,
  sectionStyle,
  paragraphStyle1,
  paragraphStyle2,
} from './modalContentMainSetting.css';

export function ModalContentMainSetting({
  userSchool,
  userRegion,
}: {
  userSchool: string | undefined;
  userRegion: string;
}) {
  return (
    <>
      <p className={headingStyle}>정보 변경</p>
      <div className={sectionStyle}>
        <div>
          <p className={paragraphStyle1}>
            소속학교: {userSchool || '학교 없음'}
          </p>
          <p className={paragraphStyle2}>
            변경 버튼을 눌러 재인증을 통해 소속학교를 변경할 수 있습니다.
          </p>
        </div>
        <div>
          <Link href="/ModalContentSchoolSetting">
            <Button>변경하기</Button>
          </Link>
        </div>
      </div>
      <div className={sectionStyle}>
        <div>
          <p className={paragraphStyle1}>
            소속지역: {userRegion || '지역 없음'}
          </p>
          <p className={paragraphStyle2}>
            변경 버튼을 눌러 소속지역를 변경할 수 있습니다.
          </p>
        </div>
        <div>
          <Link href="/ModalContentRegionSetting">
            <Button>변경하기</Button>
          </Link>
        </div>
      </div>

      <p className={headingStyle}>계정 정보</p>
      <div className={sectionStyle}>
        <div>
          <p className={paragraphStyle1}>서비스 로그아웃</p>
          <p className={paragraphStyle2}>
            서비스에서 로그아웃 합니다. 메인 화면으로 이동합니다.
          </p>
        </div>
        <div>
          {/* 텍스트버튼 만들면 변경 */}
          <button>로그아웃</button>
        </div>
      </div>
      <div className={sectionStyle}>
        <div>
          <p className={paragraphStyle1}>서비스 탈퇴</p>
          <p className={paragraphStyle2}>탈퇴 시 모든 정보는 삭제 됩니다.</p>
        </div>
        <div>
          {/* 텍스트버튼 만들면 변경 */}
          <button>탈퇴하기</button>
        </div>
      </div>
    </>
  );
}
