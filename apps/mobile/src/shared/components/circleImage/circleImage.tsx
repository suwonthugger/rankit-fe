import Image from 'next/image';
import EmptyProfileImage from '@/shared/assets/svgs/profile.svg';
import { divStyle, imageStyle } from './circleImage.css';

interface CircleImageProps {
  src?: string;
  size?: 'mobileSm' | 'mobileLg' | 'sm' | 'lg';
}

const CircleImage = ({ src, size = 'sm' }: CircleImageProps) => {
  return (
    <div className={divStyle[size]}>
      {src ? (
        <Image
          src={src}
          width={460}
          height={460}
          alt="프로필 이미지"
          className={imageStyle}
        />
      ) : (
        <EmptyProfileImage />
      )}
    </div>
  );
};

export default CircleImage;
