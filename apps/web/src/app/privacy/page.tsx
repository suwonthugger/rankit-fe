import {
  containerStyle,
  contentStyle,
  headingStyle,
  paragraphStyle,
  titleStyle,
} from './privacyPage.css';

const PrivacyPage = () => {
  return (
    <div className={containerStyle}>
      <div className={contentStyle}>
        <p className={titleStyle}>개인정보 처리방침</p>
        <p>
          개인정보 처리방침 rankit(이하 &quot;사이트&quot;라 칭함)는
          『개인정보보호법』에 따라 이용자의 개인정보를 보호하기 위하여 다음과
          같이 개인정보 처리방침을 수립하고 공개합니다. <br />
          <br />본 개인정보 처리방침은 사이트가 제공하는 서비스에 적용됩니다.
        </p>
        <div>
          <p className={headingStyle}>
            1. 개인정보의 수집 항목과 목적 및 보유 기간
          </p>
          <p className={paragraphStyle}>
            &quot;개인정보&quot;는 생존하는 개인에 관한 정보로서 해당 정보에
            포함된 깃허브 계정의 아이디, 프로필 사진 등으로 해당 개인을 식별할
            수 있는 정보(해당 정보만으로는 특정 개인을 식별할 수 없더라도 다른
            정보와 쉽게 결합하여 식별할 수 있는 것을 포함)를 말합니다.
            <br /> 사이트가 회원에게 필수적으로 수집하는 개인정보의 항목 및
            목적과 보유 기간은 다음과 같습니다.
            <br /> 목적 : 연동 및 이용자 식별, 회원 관리 <br />
            항목 : 깃허브 아이디 및 깃허브 계정정보 <br />
            보유기간 : 회원 탈퇴 시 즉시 파기 <br />
            <br />
            목적 : 프로필에 노출 <br />
            항목 : 깃허브 아이디 및 프로필 사진, 회원이 설정한 학교 및 지역 정보
            <br />
            보유기간 : 회원 탈퇴 시 즉시 파기 사이트 접속 및 이용 과정에서
            IP주소, 쿠키, 서비스 이용 기록이 생성되어 수집될 수 있습니다.
            <br /> 웹 브라우저의 설정에서 쿠키의 저장을 허용 혹은 거부할 수
            있습니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>2. 개인정보의 제3자 제공</p>
          <p className={paragraphStyle}>
            사이트는 회원의 개인정보를 제3자에게 제공하지 않습니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>3. 개인정보 자동 수집의 거부</p>
          <p className={paragraphStyle}>
            사이트는 깃허브 소셜 로그인을 통해 사용자의 개인정보를 수집합니다.
            <br />
            깃허브 소셜 로그인과, 학교 지역정보 수집을 거부할 시 사이트의
            서비스를 정상적으로 이용할 수 없습니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>4. 개인정보의 파기</p>
          <p className={paragraphStyle}>
            사이트는 원칙적으로 회원의 개인정보를 회원 탈퇴 시 지체없이
            파기합니다.
            <br /> 전자적 파일 형태로 저장된 개인정보는 복구할 수 없는 기술적
            방법을 사용하여 파기하며, 출력물 등은 분쇄하는 방식으로 파기합니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>5. 개인정보의 제공</p>
          <p className={paragraphStyle}>
            사이트는 회원의 개인정보를 본 개인정보 처리방침에서 고지한 범위를
            넘어 이용하거나 타인 또는 타 기업, 기관에 제공하지 않습니다. 다만,
            다음 경우는 예외로 합니다.
            <br /> 관계법령에 의거하여 개인정보 제공 의무가 있는 경우
            이용자로부터 별도의 동의를 받은 경우
          </p>
        </div>
        <div>
          <p className={headingStyle}>
            6. 정보주체 및 법정대리인의 권리와 그 행사 방법
          </p>
          <p className={paragraphStyle}>
            회원은 언제든지 등록된 개인정보를 열람하거나 정정할 수 있습니다.
            <br />
            회원가입 등을 통한 개인정보의 수집, 이용, 제공과 관련해 귀하는
            동의하신 내용을 언제든지 철회할 수 있습니다. 사이트 내 탈퇴 기능을
            사용하면 즉시 개인정보가 파기됩니다. <br />
            깃허브를 통해 연동된 개인정보의 정정은 사이트에서 할 수 없습니다.
          </p>
        </div>
        <div>
          <p className={headingStyle}>7. 개인정보의 안전성 확보 조치</p>
          <p className={paragraphStyle}>
            사이트는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에
            필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
            <br /> 개인정보의 암호화: 이용자의 개인정보 중 깃허브 관련 정보는
            암호화되어 저장 및 관리되고 있어 본인만이 알 수 있습니다. 
          </p>
        </div>
        <div>
          <p className={headingStyle}>8. 개인정보에 관한 민원</p>
          <p className={paragraphStyle}>
            불만을 처리하기 위하여 아래와 같이 이메일을 통한 민원을 받고
            있습니다. <br />
            gitbal2019@gmail.com 을 통한 민원 내용 접수
          </p>
        </div>
        <div>
          <p className={headingStyle}>9. 개정 전 고지 의무</p>
          <p className={paragraphStyle}>
            이 개인정보 처리방침은 아래 고지된 시행일로부터 적용되며, 법령 및
            방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의
            시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
        </div>
        <div>
          <p className={paragraphStyle}>
            공고일자: 2024년 0월 0일 <br />
            시행일자: 2024년 0월 0일
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
