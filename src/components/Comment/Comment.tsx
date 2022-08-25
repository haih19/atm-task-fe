import { Comment, List, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './styles.scss';

const { Title } = Typography;

const data = [
  {
    author: 'Han Solo',
    avatar: <UserOutlined />,
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and
        Axure), to help people create their product prototypes beautifully and efficiently.
      </p>
    ),
  },
  {
    author: 'Han Solo',
    avatar: <UserOutlined />,
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and
        Axure), to help people create their product prototypes beautifully and efficiently.
      </p>
    ),
  },
];

export const CommentList = () => {
  return (
    <div className="cmt-content">
      <Title level={4}>Processed Client</Title>
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <li>
            <Comment author={item.author} avatar={item.avatar} content={item.content} />
          </li>
        )}
      />
    </div>
  );
};
