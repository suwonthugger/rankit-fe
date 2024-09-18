'use client';

import { useFunnel } from '../../shared/hooks/useFunnel';
import AuthCompletion from './_components/authCompletion/authCompletion';
import AuthGithub from './_components/authGithub/authGithub';
import AuthRegion from './_components/authRegion/authRegion';
import AuthSchool from './_components/authSchool/authSchool';
import { divStyle } from './authPage.css';

const AuthPage = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel('github');

  const handleNextStep = (step: string) => {
    setStep(step);
  };

  return (
    <div className={divStyle}>
      {
        <Funnel>
          <Step name={'github'}>
            <AuthGithub handleNextStep={handleNextStep} />
          </Step>
          <Step name={'school'}>
            <AuthSchool handleNextStep={handleNextStep} />
          </Step>
          <Step name={'region'}>
            <AuthRegion handleNextStep={handleNextStep} />
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
