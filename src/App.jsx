import React, { useState } from "react";
import { planData } from "./tarif/plan-data/data";
import { PlanCard } from "./tarifcard/plan-card";

import styles from "./assets/styles/app.module.scss";

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <div className={styles.app}>
      {planData.map((plan, index) => (
        <PlanCard
          key={index}
          name={plan.name}
          price={plan.price}
          speed={plan.speed}
          theme={plan.theme}
          isSelected={selectedPlan === plan.name}
          onSelect={() => handlePlanSelect(plan.name)}
        />
      ))}
    </div>
  );
}

export { App };
