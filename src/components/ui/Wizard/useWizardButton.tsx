import { useWizardContext } from "./useWizard";

export const useWizardButtons = () => {
    const { goNextPage, goPrevPage, activePageIndex, steps } = useWizardContext();
    return {
      goNextPage,
      goPrevPage,
      activePageIndex,
      steps
    };
  };