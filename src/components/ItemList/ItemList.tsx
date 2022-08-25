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
      <>
         <Title style={{ textAlign: "left", padding: "8px 0 0 16px" }} level={4}>
            Queue
         </Title>
         <div className="item-list" style={{ paddingBottom: "8px" }}>
            <div
               id="scrollableDiv"
               style={{
                  height: 400,
                  overflow: "auto",
                  padding: "0 16px",
                  border: "1px solid rgba(140, 140, 140, 0.35)",
               }}>
               <InfiniteScroll
                  dataLength={queueData.length}
                  next={fetchQueues}
                  hasMore={queueData.length < 50}
                  loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                  endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                  scrollableTarget="scrollableDiv">
                  <List
                     dataSource={queueData}
                     renderItem={(item, index) => (
                        <List.Item key={index}>
                           <List.Item.Meta
                              avatar={<UserOutlined />}
                              title={<a href="https://ant.design">{item.name}</a>}
                              description={item.transaction}
                           />
                        </List.Item>
                     )}
                  />
               </InfiniteScroll>
            </div>
         </div>
      </>
   );
};
