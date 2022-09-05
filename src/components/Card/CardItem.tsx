import { Typography, Image, Button } from 'antd';
import { useEffect } from 'react';
import './styles.scss';
import './responsive.styles.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAtms } from '../../features/atm/atmSlice';
import { deleteAtm, resetDelete } from '../../features/deleteAtm/deleteAtmSlice';
import { resetAdd } from '../../features/addAtm/addAtmSlice';
const { Title } = Typography;

export const CardItem = () => {
   const dispatch = useAppDispatch();
   const { res } = useAppSelector((state) => state.atms);
   // const { success: deleteAtmSuccess } = useAppSelector((state) => state.deleteAtm);
   // const { success: addAtmSuccess } = useAppSelector((state) => state.addAtm);

   // const dragItem = React.useRef<any>(null);
   // const dragOverItem = React.useRef<any>(null);

   // const handleSort = () => {
   //    let atmCopy = res.atm;

   //    const draggedItemContent = atmCopy.splice(dragItem.current, 1)[0];

   //    atmCopy.splice(dragOverItem.current, 0, draggedItemContent);

   //    dragItem.current = null;
   //    dragOverItem.current = null;
   // };

   useEffect(() => {
      dispatch(getAtms());
      dispatch(resetDelete());
      dispatch(resetAdd());
   }, [res.atm, res.queue]);

   const imgSrc = 'https://res.cloudinary.com/dqvjijgb5/image/upload/v1661323143/atm/atm-card.jpg';

   const handleDeleteAtm = (id: string) => {
      dispatch(deleteAtm(id));
   };

   return (
      <div className="card-list">
         {res.atm &&
            res.atm.length > 0 &&
            res.atm.slice(0, 3).map((atm, index) => {
               return (
                  <div key={index} id={atm.id} draggable="true" className="card-item">
                     <div className="item-container">
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
                  </div>
               );
            })}
      </div>
   );
};
