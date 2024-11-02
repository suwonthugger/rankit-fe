'use client';

import { useState } from 'react';
import AuthCompletion from './_components/authCompletion/authCompletion';
import AuthGithub from './_components/authGithub/authGithub';
import AuthRedirect from './_components/authRedirect/authRedirect';
import AuthRegion from './_components/authRegion/authRegion';
import AuthSchool from './_components/authSchool/authSchool';
import { useFunnel } from './_hooks/useFunnel';
import { divStyle } from './authPage.css';

const AuthPage = () => {
  const { Funnel, Step, setStep } = useFunnel();

  const [대학교, set대학교] = useState('');

  const handle대학교변경 = (대학교: string) => set대학교(대학교);

  return (
    <div className={divStyle}>
      {
        <Funnel>
          <Step name={'github'}>
            <AuthGithub />
          </Step>
          <Step name={'redirect'}>
            <AuthRedirect handleNextStep={setStep} />
          </Step>
          <Step name={'school'}>
            <AuthSchool
              handleNextStep={setStep}
              handle대학교변경={handle대학교변경}
            />
          </Step>
          <Step name={'region'}>
            <AuthRegion handleNextStep={setStep} 대학교={대학교} />
          </Step>
          <Step name={'completion'}>
            <AuthCompletion />
          </Step>
        </Funnel>
      }
    </div>
  );
};

export default AuthPage;
