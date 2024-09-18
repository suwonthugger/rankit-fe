import React from 'react';
import { Modal } from '@/shared/components/modal/modal';
import { ModalContentMainSetting } from '@/shared/components/modalContentMainSetting/modalContentMainSetting';

const page = () => {
  return (
    <Modal title="설정">
      <ModalContentMainSetting
        userSchool="userSchool"
        userRegion="userRegion"
      />
    </Modal>
  );
};

export default page;
