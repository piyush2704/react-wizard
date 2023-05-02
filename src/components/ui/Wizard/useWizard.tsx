import * as React from "react";
import { WizardContext } from "./WizardContext";

export const useWizardContext = () => {
    const context = React.useContext(WizardContext);
    if (!context) {
      throw new Error(
        `Please add your component under wizard context provider`
      );
    }
    return context;
  };