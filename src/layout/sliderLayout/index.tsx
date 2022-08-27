import { AddAtm } from "../../components/AddAtm";
import { AddTrans } from "../../components/AddTrans";
import { LogOut } from "../../components/LogOut";
import "./styles.scss";
import "./responsive.styles.scss";

export const SliderLayout = () => {
   return (
      <div className="slider-layout">
         <div className="add-container">
            <AddAtm />
            <AddTrans />
         </div>
         <div className="logout-container">
            <LogOut />
         </div>
      </div>
   );
};
