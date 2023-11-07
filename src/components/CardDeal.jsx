import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => (
  <section className={`${layout.section} mx-10`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a Better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>

      <br className="sm:block hidden" />
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        beatae perferendis ipsam doloribus voluptates ex, harum laboriosam
        soluta aut ab!
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[90%] h-[90%]" />
    </div>
  </section>
);

export default CardDeal;
