import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export const Header = () => {
   return (
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
         <Menu.Item key="mail" icon={<HomeOutlined />}>
            Home
         </Menu.Item>
      </Menu>
   );
};
