import { RightCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

export const LogOut = () => {
   const navigate = useNavigate();

   const handleOnclickLogout = () => {
      localStorage.removeItem('accessToken');
      navigate('/login');
   };

   return (
      <div className="logout-icon">
         <button onClick={handleOnclickLogout}>
            <Tooltip title="Log Out">
               <RightCircleOutlined />
            </Tooltip>
         </button>
      </div>
   );
};
