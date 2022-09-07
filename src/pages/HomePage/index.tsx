import { Header } from '../../layout/Header';
import { HomeLayout } from '../../layout/HomeLayout';

import './styles.scss';

export const HomePage = () => {
   return (
      <div id="home">
         <Header />
         <HomeLayout />
      </div>
   );
};
