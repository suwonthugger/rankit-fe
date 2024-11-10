'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import CustomAlertDialog from '@/shared/components/alertDialog/AlertDialog';
import Button from '@/shared/components/button/button';
import { useGetUserInfo } from '@/shared/apis/auth/queries';
import { useDeleteWithdraw } from '@/shared/apis/user/queries';
import { getAuthHeader } from '@/shared/utils/auth';
import {
  headingStyle,
  sectionStyle,
  paragraphStyle1,
  paragraphStyle2,
} from './modalContentMainSetting.css';

export function ModalContentMainSetting() {
  const queryClient = useQueryClient();

  const username = useParams().userId as string;

  const { data: authUserInfo } = useGetUserInfo();
  const { mutate: 회원탈퇴함수 } = useDeleteWithdraw();

  const handleLogOut = () => {
    queryClient.invalidateQueries({ queryKey: ['userInfo', getAuthHeader()] });
    localStorage.removeItem('accessToken');
    window.location.href = '/';
  };

  const handleDelAuth = () => {
    회원탈퇴함수(undefined, {
      onSuccess: () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/';
      },
    });
  };

  return (
    <>
      <p className={headingStyle}>정보 변경</p>
      <div className={sectionStyle}>
        <div>
          <p className={paragraphStyle1}>
            소속학교 == {authUserInfo?.univName || '학교 없음'}
          </p>
          <p className={paragraphStyle2}>
            변경 버튼을 눌러 재인증을 통해 소속학교를 변경할 수 있습니다.
          </p>
        </div>
        <div>
          <Link href={`/user/${username}/school-setting`}>
            <Button>변경하기</Button>
          </Link>
        </div>
      </div>
      <div className={sectionStyle}>
        <div>
          <p className={paragraphStyle1}>
            소속지역 == {authUserInfo?.regionName || '지역 없음'}
          </p>
          <p className={paragraphStyle2}>
            변경 버튼을 눌러 소속지역를 변경할 수 있습니다.
          </p>
        </div>
        <div>
          <Link href={`/user/${username}/region-setting`}>
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
      </div>
      <div className={sectionStyle}>
        <div>
          <p className={paragraphStyle1}>서비스 탈퇴</p>
          <p className={paragraphStyle2}>탈퇴 시 모든 정보는 삭제 됩니다.</p>
        </div>
        <div>
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
      </div>
    </>
  );
}
