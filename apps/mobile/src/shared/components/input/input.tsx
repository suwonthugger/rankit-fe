'use client';

import {
  createContext,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react';
import SearchLargeIcon from '@/shared/assets/svgs/search_lg.svg';
import SearchSmallIcon from '@/shared/assets/svgs/search_sm.svg';
import CircleImage from '../circleImage/circleImage';
import useClickOutside from '../rankBoard/hooks/useClickOutside';
import {
  inputContainerStyle,
  inputStyle,
  inputPaddingDefaultStyle,
  inputPaddingSearchStyle,
  inputMenuItemStyle,
  InputMenuStyle,
  container,
  rankBoardRowStyle,
  rankBoardItemLargeStyle,
  rankBoardItemSmallStyle,
  rankBoardRowParagraphStyle,
} from './input.css';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  device?: 'desktop' | 'mobile';
  variant?: 'search' | 'default';
}

interface InputContextProps {
  device: 'desktop' | 'mobile';
  handle메뉴닫기: () => void;
}

const InputContext = createContext<InputContextProps | null>(null);

const InputRoot = forwardRef<HTMLInputElement, InputProps>(
  (
    { device = 'desktop', variant = 'default', className, children, ...props },
    ref,
  ) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const divRef = useRef<HTMLDivElement>(null);

    const SearchIcon = device === 'desktop' ? SearchLargeIcon : SearchSmallIcon;

    const handle메뉴닫기 = () => {
      setMenuVisible(false);
    };

    const handleFocus = () => {
      setMenuVisible(true);
    };

    useClickOutside(divRef, () => {
      setMenuVisible(false);
    });

    const contextValue: InputContextProps = {
      device,
      handle메뉴닫기,
    };

    return (
      <InputContext.Provider value={contextValue}>
        <div ref={divRef} className={container}>
          <div
            className={`${inputContainerStyle[device]} ${
              variant === 'default'
                ? inputPaddingDefaultStyle[device]
                : inputPaddingSearchStyle[device]
            } ${className}`}>
            {variant === 'search' && <SearchIcon />}
            <input
              ref={ref}
              onFocus={handleFocus}
              {...props}
              className={inputStyle}
            />
          </div>

          {menuVisible && children}
        </div>
      </InputContext.Provider>
    );
  },
);

InputRoot.displayName = 'Input';

interface InputMenuProps {
  children: ReactNode;
}

const InputList = ({ children }: InputMenuProps) => {
  const context = useContext(InputContext);
  const device = context?.device ?? 'desktop';
  return <ul className={InputMenuStyle[device]}>{children}</ul>;
};

interface InputMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const InputMenuItem = ({ children, onClick }: InputMenuItemProps) => {
  const context = useContext(InputContext);
  const device = context?.device ?? 'desktop';

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    context?.handle메뉴닫기();
  };

  return (
    <li onClick={handleClick} className={inputMenuItemStyle[device]}>
      {children}
    </li>
  );
};

interface InputUserItemProps {
  userRank: number;
  userName: string;
  profileImg: string;
  userScore: number;
  onClick?: () => void;
}

const InputUserItem = ({
  userRank,
  userName,
  profileImg,
  userScore,
  onClick,
}: InputUserItemProps) => {
  const context = useContext(InputContext);
  const device = context?.device ?? 'desktop';

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    context?.handle메뉴닫기();
  };

  return (
    <li onClick={handleClick} className={rankBoardRowStyle}>
      <p className={rankBoardItemSmallStyle[device]}>{userRank}</p>

      <div className={rankBoardItemLargeStyle[device]}>
        <CircleImage src={profileImg} />
        <p className={rankBoardRowParagraphStyle[device]}>{userName}</p>
      </div>

      <p className={rankBoardItemSmallStyle[device]}>
        {userScore?.toLocaleString()}
      </p>
    </li>
  );
};

const Input = Object.assign(InputRoot, {
  List: InputList,
  MenuItem: InputMenuItem,
  UserItem: InputUserItem,
});

export default Input;
