import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { ReactNode } from 'react';
import {
  alertDialogOverlay,
  alertDialogContent,
  buttonStyle,
  confirmBtnStyle,
  titleStyle,
  cancelBtnStyle,
  descriptionStyle,
} from './alertDialog.css';

interface CustomAlertDialogProps {
  variant: 'textBtn' | 'normalBtn';
  att: 'noti' | 'yesOrNo';
  color: 'blue' | 'red';
  title: string;
  description: ReactNode;
  cancelText: string;
  confirmText: string;
  triggerText: string;
  onConfirm?: () => void; // 확인 버튼을 눌렀을 때 실행할 함수
}

const CustomAlertDialog = ({
  att,
  variant,
  color,
  title,
  description,
  cancelText,
  confirmText,
  triggerText,
  onConfirm,
}: CustomAlertDialogProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className={buttonStyle[variant]}>
        {triggerText}
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className={alertDialogOverlay} />
        <AlertDialog.Content className={alertDialogContent[color]}>
          <AlertDialog.Title className={titleStyle}>{title}</AlertDialog.Title>
          <AlertDialog.Description className={descriptionStyle}>
            {description}
          </AlertDialog.Description>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.6rem',
            }}>
            <AlertDialog.Action asChild>
              <button className={confirmBtnStyle[color]} onClick={onConfirm}>
                {confirmText}
              </button>
            </AlertDialog.Action>

            {att === 'yesOrNo' && (
              <AlertDialog.Cancel asChild>
                <button className={cancelBtnStyle}>{cancelText}</button>
              </AlertDialog.Cancel>
            )}
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default CustomAlertDialog;
