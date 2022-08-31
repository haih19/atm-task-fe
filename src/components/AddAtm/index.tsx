import { Button, Modal, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addAtm } from '../../features/addAtm/addAtmSlice';
interface IInput {
   atmInput: string;
}

export const AddAtm = () => {
   const [isShowed, setIsShowed] = useState(false);
   const [atmInput, setAtmInput] = useState('');

   const [isModalVisible, setIsModalVisible] = useState(false);
   const accessToken = localStorage.getItem('accessToken');

   const dispatch = useAppDispatch();

   const handleOnchangeInput = (e: React.FormEvent<HTMLInputElement>) => {
      setAtmInput(e.currentTarget.value);
   };

   const showModal = () => {
      setIsModalVisible(true);
   };

   // const handleOk = async () => {
   //    try {
   //       const response = await axios.post(
   //          'http://localhost:5001/api/v1/atms',
   //          {
   //             name: atmInput,
   //          },
   //          {
   //             headers: {
   //                Authorization: accessToken as string,
   //             },
   //          }
   //       );
   //       setAtmInput('');
   //    } catch (err) {
   //       console.log(err);
   //    }
   //    setIsModalVisible(false);
   // };
   // const params = {
   //    name: atmInput,
   //    headers: {
   //       Authorization: localStorage.getItem('accessToken') as string,
   //    },
   // };

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
            <Input placeholder="Add ATM" onChange={handleOnchangeInput} />
         </Modal>
      </>
   );
};
