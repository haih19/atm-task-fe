import { CardItem } from '../../components/Card';
import { ProcessedClient } from '../../components/ProcessedClient';
import { ItemList } from '../../components/ItemList';
import { SliderLayout } from '../SliderLayout';

import './styles.scss';
import './responsive.styles.scss';

export const HomeLayout = () => {
   return (
      <div className="home-container">
         <SliderLayout />
         <div className="home-content">
            <div className="main-content">
               <div className="card-container">
                  <CardItem />
                  {/* <CardTest /> */}
               </div>
               <div className="list-container">
                  <ItemList />
               </div>
            </div>
            <div className="cmt-container">
               <ProcessedClient />
            </div>
         </div>
      </div>
   );
};
