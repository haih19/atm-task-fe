import { Header } from '../../layout/header';
import { HomeLayout } from '../../layout/homeLayout';

import './styles.scss';

export const HomePage = () => {
   // useEffect(() => {
   //    window.addEventListener('beforeload', () => {
   //       if (performance.navigation.type !== 1) {
   //          localStorage.removeItem('accessToken');
   //       }
   //       return;
   //    });
   // }, [localStorage.getItem('accessToken')]);

   return (
      <div id="home">
         <Header />
         <HomeLayout />
      </div>
   );
};
