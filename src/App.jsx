import React from "react";
import { planData } from "./tarif/plan-data/data";
import { PlanCard } from "./tarifcard/plan-card";


import styles from "./assets/styles/app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      {planData.map((plan, index) => (
        <PlanCard
          key={index}
          name={plan.name}
          price={plan.price}
          speed={plan.speed}
          theme={plan.theme}
        />
      ))}
    </div>
  );
}

export { App };
