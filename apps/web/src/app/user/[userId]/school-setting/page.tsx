import React from 'react';
import { Modal } from '../../../../shared/components/modal/modal';
import { ModalContentSchoolSetting } from '../../../../shared/components/modalContentSchoolSetting/modalContentSchoolSetting';

const page = () => {
  return (
    <Modal title="소속학교 변경">
      <ModalContentSchoolSetting />
    </Modal>
  );
};

export default page;
