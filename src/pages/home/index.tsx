import { Header } from '../../layout/header';
import { HomeLayout } from '../../layout/homeLayout';

import './styles.scss';

export const HomePage = () => {
   return (
      <div id="home">
         <Header />
         <HomeLayout />
      </div>
   );
};
