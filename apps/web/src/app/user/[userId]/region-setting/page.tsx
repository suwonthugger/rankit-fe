import React from 'react';
import { Modal } from '../../../../shared/components/modal/modal';
import ModalContentRegionSetting from '../../../../shared/components/modalContentRegionSetting/modalContentRegionSetting';

const page = () => {
  return (
    <Modal title="소속지역 변경">
      <ModalContentRegionSetting />
    </Modal>
  );
};

export default page;
