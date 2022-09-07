import { Button, Input, Modal } from 'antd';
import { useState } from 'react';
import { IParamsAddTrans } from '../../common/types/atm.model';
import { useAppDispatch } from '../../redux/app/hooks';
import { addTrans } from '../../redux/features/addTransaction/addTransactionSlice';

export const AddTrans = () => {
   const [namePeople, setNamePeople] = useState<string>();
   const [transaction, setTransaction] = useState<string>('');

   const [isModalVisible, setIsModalVisible] = useState(false);

   const dispatch = useAppDispatch();

   const onChangenamePeople = (e: React.FormEvent<HTMLInputElement>) => {
      setNamePeople(e.currentTarget.value);
   };
   const onChangeClientTransaction = (e: React.FormEvent<HTMLInputElement>) => {
      setTransaction(e.currentTarget.value);
   };

   const showModal = () => {
      setIsModalVisible(true);
   };

   const params: IParamsAddTrans = {
      namePeople: namePeople as string,
      transaction: transaction as string,
   };

   const handleOk = () => {
      dispatch(addTrans(params));
      setNamePeople('');
      setTransaction('');
      setIsModalVisible(false);
   };

   const handleCancel = () => {
      setIsModalVisible(false);
   };
   return (
      <>
         <div className="btn-add-trans">
            <Button onClick={showModal}>Add People</Button>
         </div>
         <Modal title="Add People" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input value={namePeople} placeholder="Client Name" onChange={onChangenamePeople} />
            <br />
            <br />
            <Input
               value={transaction}
               placeholder="Transactions amount"
               onChange={onChangeClientTransaction}
            />
         </Modal>
      </>
   );
};
