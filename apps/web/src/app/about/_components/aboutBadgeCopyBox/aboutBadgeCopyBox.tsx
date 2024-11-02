'use client';

import CustomAlertDialog from '@/shared/components/alertDialog/AlertDialog';
import { divStyle } from './aboutBadgeCopyBox.css';

const AboutBadgeCopyBox = ({ badgeLink }: { badgeLink: string }) => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {}
  };

  return (
    <>
      <div className={divStyle}>
        <p>{badgeLink}</p>
        <CustomAlertDialog
          att="noti"
          variant="textBtn"
          color="blue"
          title="복사 완료"
          description={['README.md에 붙여넣기 하세요.']}
          cancelText="취소"
          confirmText="확인"
          triggerText="copy"
          onConfirm={() => handleCopyClipBoard(badgeLink)}
        />
      </div>
    </>
  );
};

export default AboutBadgeCopyBox;
