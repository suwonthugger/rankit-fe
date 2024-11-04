import {
  containerStyle,
  contentStyle,
  headingStyle,
  paragraphStyle,
  titleStyle,
} from './tosPage.css';

const TosPage = () => {
  return (
    <div className={containerStyle}>
      <div className={contentStyle}>
        <p className={titleStyle}>서비스 이용약관</p>

        <div>
          <p className={headingStyle}>제1조 목적</p>
          <p className={paragraphStyle}>
            이 약관은 팀짜글이(이하 &quot;사이트&quot;라고 합니다)에서 운영하는
            rankit 홈페이지(이하 &quot;rankit&quot;라고 합니다)에서 제공하는
            인터넷 관련 서비스를 이용함에 있어 홈페이지와 이용자의 권리·의무 및
            책임사항을 규정함을 목적으로 합니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>제2조 용어의 정리</p>
          <p className={paragraphStyle}>
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            <br />
            “서비스”란 사이트가 rankit을 통해 제공하는 웹사이트 서비스를
            말합니다.
            <br />
            “회원”이란 이 약관에 따라 회사에서 제공하는 서비스에 접속하여
            이용하는 사람을 말합니다.
            <br />
            “연동”이란 깃허브의 회원정보를 사이트에 개인정보를 제공하여 등록하는
            것을 말합니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>제3조 약관의 명시와 설정 및 개정</p>
          <p className={paragraphStyle}>
            1. 사이트는 이 약관의 내용을 사이트 화면에 연동하여 사용자가 볼 수
            있도록 합니다.
            <br />
            2. 회사가 약관을 개정하는 경우에는 적용일자 및 개정사유를 명시하여
            공고합니다. 적용일자의 7일전 공고를 원칙으로 합니다.
            <br />
            3. 제 2항에 의해 공지된 적용일자 이후의 회원이 명시적으로 거부의사를
            표명하지 않는 경우는 개정된 약관에 동의 하는것으로 간주합니다.변경된
            약관에 거부하는 회원은 회원탈퇴를 요청할 수 있습니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>제4조 서비스의 제공 및 변경</p>
          <p className={paragraphStyle}>
            사이트는 회원에게 아래와 같은 서비스를 제공합니다. 회원들의 깃허브
            활동을 통한 점수 계산 회원들간의 등수 제공 학교별 점수와 순위 제공
            지역별 점수와 순위 제공 칭호 설정과 회득 미션 제공
            <br />
            1. 서비스는 회사의 업무상 혹은 기술상 특별 사항이 없는 한 연중무휴,
            1일 24시간 운영을 원칙으로 합니다.
            <br />
            2. 서비스는 이용가능 시간을 별도로 정할 수 있습니다. 이 경우 서비스
            이용안내를 통해 공지합니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>제5조 서비스의 중단</p>
          <p className={paragraphStyle}>
            천재지변 혹은 이에 준하는 불가항력, 서버의 문제 발생 등의 경우에는
            서비스를 중단할 수 있습니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>제6조 연동 및 회원가입</p>
          <p className={paragraphStyle}>
            회원가입을 희망하는 사람은 깃허브 로그인을 통해 연동을 마치고, 이
            약관에 동의 한다는 의사를 표함으로 회원가입을 신청합니다.
            <br />
            회원가입의 성립시기는 서비스의 가입 절차에 따라 승인이 완료되는
            시점으로 합니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>제7조 회원탈퇴</p>
          <p className={paragraphStyle}>
            회원은 서비스의 언제든지 탈퇴를 요청할 수 있습니다.
            <br />
            서비스는 회원의 탈퇴 요청시 즉시 탈퇴 처리를 합니다.
            <br />
            제5조의 상황에서는 회원탈퇴가 지연될 수 있습니다.
            <br />
            서비스가 정상적으로 이용할 수 있을때, 즉시 탈퇴처리를 합니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>제8조 서비스의 의무</p>
          <p className={paragraphStyle}>
            서비스는 이 약관이 금하거나, 관련 법령 기타 공서양속에 반하는 행위를
            하지 않으며, 서비스를 안정적으로 제공하는데에 최선을
            다합니다.서비스는 회원이 동의하지 않는 영리목적의 광고성
            전자우편등을 발송하지 않습니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>제9조 회원의 의무</p>
          <p className={paragraphStyle}>
            회원은 이 약관이 금하거나, 관련 법령 기타 공횡서양속에 반하는 행위를
            하지 않습니다.
            <br />
            회원은 아래 사항의 행위를 행해서는 안 됩니다.
            <br />
            신청 혹은 변경시 타인의 정보를 도용 타인의 정보 도용 서비스와 기타
            제3자의 저작권 등 지적재산권에 대한 침해 행위 서비스와 회원이 명예를
            손상시키거나 업무를 방해하는 행위 외설 또는 폭력적인 문구, 이미지 등
            기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위
            깃허브 계정을 통해 외설 또는 폭력적인 문구, 이미지 등 기타
            공서양속에 반하는 정보를 서비스에 노출 시키는 행위 영리를 목적으로
            서비스를 사용하는 행위
          </p>
        </div>
        <div>
          <p className={headingStyle}>제10조 개인정보 보호</p>
          <p className={paragraphStyle}>
            서비스는 회원의 개인정보 수집 시 서비스 제공을 위해 필요한 범위에서
            최소한의 개인정보를 수집합니다.
            <br />
            서비스는 회원의 개인정보를 수집, 이용 하는 때에 회원에게 그 목적과
            동의를 받습니다.
            <br />
            서비스는 회원의 정보를 제3자에게 제공하지 않습니다. 다만 관령 법령에
            달리 정함이 있는 경우에는 예외로 합니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>제11조 분쟁의 해결</p>
          <p className={paragraphStyle}>
            서비스는 회원의 귀책사유로 발생한 서비스의 이용장애에 대해서는
            책임을 지지 않습니다.서비스는 이용되는 서비스 이외의 문제로 발생된
            분쟁에는 책임지지 않습니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>부칙</p>
          <p className={paragraphStyle}>
            이 약관은 2024년 11월 1일부터 적용됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TosPage;
