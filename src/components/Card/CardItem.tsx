import { Typography, Image, Button } from 'antd';
import { useEffect, useRef, useState } from 'react';
import './styles.scss';
import './responsive.styles.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAtms } from '../../features/atm/atmSlice';
import { deleteAtm } from '../../features/deleteAtm/deleteAtmSlice';
const { Title } = Typography;

// interface IAtmData {
//    client: string;
//    id: string;
//    name: string;
//    remove: boolean;
//    status: string;
//    transaction: number;
// }

export const CardItem = () => {
   const [loading, setLoading] = useState(false);

   const dispatch = useAppDispatch();
   const { res } = useAppSelector((state) => state.atms);

   // useEffect(() => {
   //    // fetchAtms();
   // }, []);

   // const reLoad = () => {
   //    // fetchAtms();
   // };
   const headers = {
      Authorization: localStorage.getItem('accessToken') as string,
   };
   useEffect(() => {
      dispatch(getAtms(headers));
   }, [dispatch, res.atm]);

   const dragItem = useRef<any>(null);
   const dragOverItem = useRef<any>(null);

   // const handleSort = () => {
   //    let atmDataCopy = [...atmData];
   //    const draggedItemContent = atmDataCopy.splice(dragItem.current, 1)[0];
   //    atmDataCopy.splice(dragOverItem.current, 0, draggedItemContent);

   //    dragItem.current = null;
   //    dragOverItem.current = null;

   //    setAtmData(atmDataCopy);
   // };

   const imgSrc = 'https://res.cloudinary.com/dqvjijgb5/image/upload/v1661323143/atm/atm-card.jpg';

   const accessToken = localStorage.getItem('accessToken');

   // const fetchAtms = async () => {
   //    try {
   //       const response = await axios.get('http://localhost:5001/api/v1/atms', {
   //          headers: {
   //             Authorization: accessToken as string,
   //          },
   //       });
   //       // console.log(response.data);
   //       setAtmData(response.data.atm);
   //    } catch (err) {}
   // };

   // const handleDeleteAtm = async (atm: IAtmData) => {
   //    const params = {
   //       atmId: atm.id,
   //    };
   //    try {
   //       const response = await axios.delete(
   //          `http://localhost:5001/api/v1/atms/${atm.id}`,

   //          {
   //             headers: {
   //                Authorization: accessToken as string,
   //             },
   //          }
   //       );
   //       // reLoad();

   //       setLoading(!loading);
   //    } catch (error) {
   //       console.log(error);
   //    }
   // };

   const handleDeleteAtm = (id: string) => {
      dispatch(deleteAtm(id));
   };

   return (
      <div className="card-list">
         {res.atm &&
            res.atm.length > 0 &&
            res.atm.slice(0, 3).map((atm, index) => {
               return (
                  <div
                     key={index}
                     draggable
                     onDragStart={(e) => (dragItem.current = index)}
                     onDragEnter={(e) => (dragOverItem.current = index)}
                     // onDragEnd={handleSort}
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
                        <Button onClick={() => handleDeleteAtm(atm.id)} danger>
                           Delete Atm
                        </Button>
                     </div>
                  </div>
               );
            })}
      </div>
   );
};
