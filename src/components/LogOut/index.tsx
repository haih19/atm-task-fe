import { RightCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

interface IAtmData {
   client: string;
   id: string;
   name: string;
   remove: boolean;
   status: string;
   transaction: number;
}

export const LogOut = () => {
   const navigate = useNavigate();

   const handleOnclickLogout = () => {
      localStorage.removeItem("accessToken");
      navigate("/login");
   };

   return (
      <>
         <div className="current-user">
            <div className="user-name">Jadon Smith</div>
            <div className="user-icon">
               <Avatar icon={<UserOutlined />} />
            </div>
         </div>
         <div className="logout-icon">
            <button onClick={handleOnclickLogout}>
               <Tooltip title="Log Out">
                  <RightCircleOutlined />
               </Tooltip>
            </button>
         </div>
      </>
   );
};
