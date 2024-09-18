import Image from 'next/image';
import { divStyle, imageStyle } from './circleImage.css';

interface CircleImageProps {
  src?: string;
  size?: 'sm' | 'lg';
}

const CircleImage = ({
  src = 'https://avatars.githubusercontent.com/u/127329855?v=4',
  size = 'sm',
}: CircleImageProps) => {
  return (
    <div className={divStyle[size]}>
      <Image
        src={src}
        width={460}
        height={460}
        alt="프로필 이미지"
        className={imageStyle}
      />
    </div>
  );
};

export default CircleImage;
