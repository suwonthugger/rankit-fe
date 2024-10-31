'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, ReactElement } from 'react';

interface StepProps {
  name: string;
  children: ReactNode;
}

interface FunnelProps {
  children: ReactElement<StepProps>[];
}

export const useFunnel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const step = searchParams.get('step');

  const setStep = (step: string) => {
    router.push(`?step=${step}`, { scroll: false });
  };

  const Step = ({ children }: StepProps) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step,
    );
    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step };
};
