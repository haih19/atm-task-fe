import { Typography, Image, Button } from 'antd';
import React, { useEffect } from 'react';
import './styles.scss';
import './responsive.styles.scss';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getAtms, handleDrag } from '../../redux/features/atm/atmSlice';
import { deleteAtm, resetDelete } from '../../redux/features/deleteAtm/deleteAtmSlice';
import { resetAdd } from '../../redux/features/addAtm/addAtmSlice';
import { CLOUDINARY_API } from '../../common/constants/configs';
const { Title } = Typography;

export const CardItem = () => {
   const dispatch = useAppDispatch();
   const { res } = useAppSelector((state) => state.atms);

   const dragItem = React.useRef<any>(null);
   const dragOverItem = React.useRef<any>(null);

   const handleSort = () => {
      let atmCopy = [...res.atm];

      const draggedItemContent = atmCopy.splice(dragItem.current, 1)[0];

      atmCopy.splice(dragOverItem.current, 0, draggedItemContent);

      dragItem.current = null;
      dragOverItem.current = null;

      dispatch(handleDrag(atmCopy));
   };

   useEffect(() => {
      // setInterval(() => {
      dispatch(getAtms());
      dispatch(resetDelete());
      dispatch(resetAdd());
      // }, 3000);/
   }, [res.atm, res.queue]);
   // }, []);

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
                     onDragEnd={handleSort}
                     onDragOver={(e) => e.preventDefault()}
                     id={atm.id}
                     className="card-item">
                     <div className="item-container">
                        <div className="card-img">
                           <Image src={CLOUDINARY_API} />
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
