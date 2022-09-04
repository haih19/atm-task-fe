import { CardItem } from '../../components/Card/CardItem';
import { CommentList } from '../../components/Comment/Comment';
import { ItemList } from '../../components/ItemList/ItemList';
import { SliderLayout } from '../sliderLayout';

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
               <CommentList />
            </div>
         </div>
      </div>
   );
};
