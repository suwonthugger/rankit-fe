'use client';

import { useRouter } from 'next/navigation';
import ArrowBack from '@/shared/assets/svgs/arrow_back.svg';
import {
  modalStyle,
  contentStyle,
  divHeaderStyle,
  headerStyle,
} from './modal.css';

export function Modal({
  children,
  title = '설정',
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const router = useRouter();

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };

  return (
    <div className={modalStyle} onClick={handleOutsideClick}>
      <div className={contentStyle}>
        <div className={divHeaderStyle}>
          <ArrowBack
            onClick={() => {
              router.back();
            }}
          />
          <h1 className={headerStyle}>{title}</h1>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
