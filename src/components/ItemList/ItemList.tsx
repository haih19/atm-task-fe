import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, List, Skeleton, Typography } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";

import "./styles.scss";
import axios from "axios";

const { Title } = Typography;

interface IQueueData {
   transaction: string;
   name: string;
}
export const ItemList = () => {
   // const [loading, setLoading] = useState(false);
   // const [queueData, setData] = useState<DataType[]>([]);
   const [queueData, setQueueData] = useState<IQueueData[]>([]);
   // const loadMoreData = () => {
   //    if (loading) {
   //       return;
   //    }
   //    setLoading(true);
   //    fetch(
   //       "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
   //    )
   //       .then((res) => res.json())
   //       .then((body) => {
   //          setData([...queueData, ...body.results]);
   //          setLoading(false);
   //       })
   //       .catch(() => {
   //          setLoading(false);
   //       });
   // };

   const accessToken = localStorage.getItem("accessToken");

   const fetchQueues = async () => {
      try {
         let response = await axios.get("http://localhost:5001/api/v1/atms", {
            headers: {
               Authorization: accessToken as string,
            },
         });

         setQueueData(response.data.queue);
      } catch (err) {}
   };

   useEffect(() => {
      const t1 = setTimeout(() => {
         fetchQueues();
      }, 1000);
      return () => {
         clearTimeout(t1);
      };
   }, []);

   return (
      <div className="list-content">
         <div className="list-title">
            <Title level={4}>Queue</Title>
         </div>
         <div className="list-body">
            {queueData &&
               queueData.length > 0 &&
               queueData.splice(0, 10).map((item, index) => {
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
