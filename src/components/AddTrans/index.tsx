import { Button, Input, Modal } from "antd";
import axios from "axios";
import { useState } from "react";

export const AddTrans = () => {
   // const [isShowed, setIsShowed] = useState<boolean>(false);
   const [clientName, setClientName] = useState<string>("");
   const [clientTransaction, setClientTransaction] = useState<string>("");

   const [isModalVisible, setIsModalVisible] = useState(false);
   const accessToken = localStorage.getItem("accessToken");

   const onChangeClientName = (e: React.FormEvent<HTMLInputElement>) => {
      setClientName(e.currentTarget.value);
   };
   const onChangeClientTransaction = (e: React.FormEvent<HTMLInputElement>) => {
      setClientTransaction(e.currentTarget.value);
   };

   const showModal = () => {
      setIsModalVisible(true);
   };

   const handleOk = async () => {
      try {
         const response = await axios.post(
            "http://localhost:5001/api/v1/atms/people",
            {
               namePeople: clientName,
               transaction: clientTransaction,
            },
            {
               headers: {
                  Authorization: accessToken as string,
               },
            }
         );
         console.log(accessToken);

         console.log(response);
         setClientName("");
         setClientTransaction("");
      } catch (err) {}
      setIsModalVisible(false);
   };

   const handleCancel = () => {
      setIsModalVisible(false);
      setClientName("");
      setClientTransaction("");
   };
   return (
      <>
         <div className="btn-add-trans">
            <Button onClick={showModal}>Add People</Button>
         </div>
         <Modal
            title="Add People"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}>
            <Input
               value={clientName}
               placeholder="Client Name"
               onChange={onChangeClientName}
            />
            <br />
            <br />
            <Input
               // value={clientTransaction}
               placeholder="Transactions amount"
               onChange={onChangeClientTransaction}
            />
         </Modal>
      </>
   );
};
