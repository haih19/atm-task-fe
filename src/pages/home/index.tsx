import { Header } from "../../layout/header";
import { HomeLayout } from "../../layout/homeLayout";
import { useEffect } from "react";

import "./styles.scss";

export const HomePage = () => {
   useEffect(() => {
      window.addEventListener("beforeload", () => {
         if (performance.navigation.type !== 1) {
            localStorage.removeItem("accessToken");
         }
         return;
      });
   }, []);

   // useEffect(() => {
   //    window.addEventListener("beforeunload", () =>
   //       localStorage.removeItem("accessToken")
   //    );
   //    return () => {
   //       window.removeEventListener("beforeunload", () =>
   //          localStorage.removeItem("accessToken")
   //       );
   //    };
   // }, []);
   return (
      <div id="home">
         <Header />
         <HomeLayout />
      </div>
   );
};
