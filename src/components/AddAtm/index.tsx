import { Button, Modal, Input } from 'antd';
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/app/hooks';
import { addAtm } from '../../redux/features/addAtm/addAtmSlice';

export const AddAtm = () => {
   const [atmInput, setAtmInput] = useState('');

   const [isModalVisible, setIsModalVisible] = useState(false);

   const dispatch = useAppDispatch();

   const handleOnchangeInput = (e: React.FormEvent<HTMLInputElement>) => {
      setAtmInput(e.currentTarget.value);
   };

   const showModal = () => {
      setIsModalVisible(true);
   };

   const handleOk = () => {
      dispatch(addAtm(atmInput));
      setAtmInput('');
      setIsModalVisible(false);
   };

   const handleCancel = () => {
      setIsModalVisible(false);
   };

   return (
      <>
         <div className="btn-add-atm">
            <Button onClick={showModal}>Add ATM</Button>
         </div>
         <Modal title="Add ATM" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input placeholder="Add ATM" onChange={handleOnchangeInput} value={atmInput} />
         </Modal>
      </>
   );
};
