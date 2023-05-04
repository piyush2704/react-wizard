import { useWizardContext } from "./useWizard";

export const useWizardProgress = () => {
    const { activePageIndex, steps } = useWizardContext();
    return {
      currentIndex: activePageIndex + 1,
      steps
    };
  };