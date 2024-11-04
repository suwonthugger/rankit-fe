import {
  containerStyle,
  contentParagraphStyle,
  headingStyle,
  subContentParagraphStyle,
} from './cardInfo.css';

interface cardInfoProps {
  title: string;
  content: string;
  subContent?: string;
}

const CardInfo = ({ title, content, subContent }: cardInfoProps) => {
  return (
    <div className={containerStyle}>
      <h3 className={headingStyle}>{title}</h3>
      <p className={contentParagraphStyle}>{content}</p>
      {subContent && <p className={subContentParagraphStyle}>{subContent}</p>}
    </div>
  );
};

export default CardInfo;
