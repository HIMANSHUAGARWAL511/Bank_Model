import React from "react";
import styles from "../style";
import { clients } from "../constants/index";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 mx-2`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((item) => (
        <div
          key={item.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={item.logo}
            alt="client"
            className="sm:w-[142px] w-[100px] object-contain sm:my-0 my-3 "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
