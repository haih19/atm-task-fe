import { useEffect } from 'react';
import { Header } from '../../layout/header';
import { HomeLayout } from '../../layout/homeLayout';

import './styles.scss';

export const HomePage = () => {
   // useEffect(() => {
   //    window.addEventListener('beforeload', () => {
   //       if (performance.navigation.type !== 1) {
   //          localStorage.removeItem('accessToken');
   //       }
   //    });
   //    window.addEventListener('beforeunload', () => {
   //       localStorage.removeItem('accessToken');
   //       alert('do you really want to close tab');
   //    });
   // }, [localStorage.getItem('accessToken')]);

   return (
      <div id="home">
         <Header />
         <HomeLayout />
      </div>
   );
};
