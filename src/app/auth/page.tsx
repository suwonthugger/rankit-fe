'use client';

import { useFunnel } from '@/shared/hooks/useFunnel';
import AuthGithub from './_components/authGithub/authGithub';
import AuthRegion from './_components/authRegion/authRegion';
import AuthSchool from './_components/authSchool/authSchool';
import { divStyle } from './authPage.css';

const AuthPage = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel('region');

  return (
    <div className={divStyle}>
      {
        <Funnel>
          <Step name={'github'}>
            <AuthGithub />
          </Step>
          <Step name={'school'}>
            <AuthSchool />
          </Step>
          <Step name={'region'}>
            <AuthRegion />
          </Step>
        </Funnel>
      }
    </div>
  );
};

export default AuthPage;
