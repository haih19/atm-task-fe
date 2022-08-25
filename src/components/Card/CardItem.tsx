import { Typography, Image, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.scss";

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
         console.log(response.data);

         setAtmData(response.data.atm);
      } catch (err) {}
   };

   const handleDeleteAtm = async (atm: IAtmData) => {
      const params = {
         atmId: atm.id,
      };
      try {
         const response = axios.post(
            `ttp://localhost:5001/api/v1/?`,
            {
               params,
            },
            {
               headers: {
                  Authorization: accessToken as string,
               },
            }
         );
         console.log(response);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      fetchAtms();
   }, []);

   return (
      <div className="card-list">
         {atmData &&
            atmData.length > 0 &&
            atmData.map((atm, index) => {
               return (
                  <div key={index} className="card-item">
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
