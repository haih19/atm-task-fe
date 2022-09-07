import { UserOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getAtms } from '../../redux/features/atm/atmSlice';
import './styles.scss';

const { Title } = Typography;

export const ItemList = () => {
   const dispatch = useAppDispatch();
   const { res } = useAppSelector((state) => state.atms);

   useEffect(() => {
      dispatch(getAtms());
   }, []);

   return (
      <div className="list-content">
         <div className="list-title">
            <Title level={4}>Queue</Title>
         </div>
         <div className="list-body">
            {res.queue &&
               res.queue.length > 0 &&
               res.queue.slice(0, 15).map((item, index) => {
                  return (
                     <div key={index} className="list-item">
                        <div className="item-icon">
                           <Avatar icon={<UserOutlined />} />
                        </div>
                        <div className="item-text">
                           <div className="item-text-head">
                              <Title level={5}>Transaction: {item.name}</Title>
                           </div>
                           <div className="item-text-body">
                              <p>Amount: {item.transaction}</p>
                           </div>
                        </div>
                     </div>
                  );
               })}
         </div>
      </div>
   );
};
