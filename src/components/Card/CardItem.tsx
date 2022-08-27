import { Typography, Image, Button } from "antd";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import "./responsive.styles.scss";
import { ReloadOutlined } from "@ant-design/icons";
const { Title } = Typography;

interface IAtmData {
   client: string;
   id: string;
   name: string;
   remove: boolean;
   status: string;
   transaction: number;
}

export const CardItem = () => {
   const [loading, setLoading] = useState(false);
   const [atmData, setAtmData] = useState<IAtmData[]>([]);

   useEffect(() => {
      fetchAtms();
   }, []);

   const reLoad = () => {
      fetchAtms();
   };

   const dragItem = useRef<any>(null);
   const dragOverItem = useRef<any>(null);

   const handleSort = () => {
      let atmDataCopy = [...atmData];
      const draggedItemContent = atmDataCopy.splice(dragItem.current, 1)[0];
      atmDataCopy.splice(dragOverItem.current, 0, draggedItemContent);

      dragItem.current = null;
      dragOverItem.current = null;

      setAtmData(atmDataCopy);
   };

   const imgSrc =
      "https://res.cloudinary.com/dqvjijgb5/image/upload/v1661323143/atm/atm-card.jpg";

   const accessToken = localStorage.getItem("accessToken");

   const fetchAtms = async () => {
      try {
         const response = await axios.get("http://localhost:5001/api/v1/atms", {
            headers: {
               Authorization: accessToken as string,
            },
         });
         // console.log(response.data);
         setAtmData(response.data.atm);
      } catch (err) {}
   };

   const handleDeleteAtm = async (atm: IAtmData) => {
      const params = {
         atmId: atm.id,
      };
      try {
         const response = await axios.delete(
            `http://localhost:5001/api/v1/atms/${atm.id}`,

            {
               headers: {
                  Authorization: accessToken as string,
               },
            }
         );
         reLoad();

         setLoading(!loading);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="card-list">
         {atmData &&
            atmData.length > 0 &&
            atmData.slice(0, 3).map((atm, index) => {
               return (
                  <div
                     key={index}
                     draggable
                     onDragStart={(e) => (dragItem.current = index)}
                     onDragEnter={(e) => (dragOverItem.current = index)}
                     onDragEnd={handleSort}
                     onDragOver={(e) => e.preventDefault()}
                     className="card-item">
                     <div className="card-img">
                        <Image src={imgSrc} />
                     </div>
                     <div className="card-content">
                        <div className="card-title">
                           <Title level={4}>{atm.name}</Title>
                        </div>
                        <div className="card-text">
                           <div className="text-name">
                              <p>Client's name: {atm.client}</p>
                           </div>
                           <div className="text-trans">
                              <p>Transaction status: {atm.status}</p>
                           </div>
                        </div>
                        <Button onClick={() => handleDeleteAtm(atm)} danger>
                           Delete Atm
                        </Button>
                     </div>
                  </div>
               );
            })}
      </div>
   );
};
