import styles from "./DefaultLayout.module.css";
import { Outlet } from "react-router-dom";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
