import React from "react";
import { useWizardContext } from "./useWizard";
import { WizardContext } from "./WizardContext";
import { Button } from "antd";

type Props = {
  steps: number;
  activePageIndex: number;
  children: React.ReactNode;
};

/** Reducer to handle next step event */
const reducer = (state: any, action: any) => {
  const { steps, activePageIndex } = state;
  switch (action.type) {
    case "NEXT_PAGE":
      const newIndex = activePageIndex + 1;
      if (newIndex < steps) {
        return { ...state, activePageIndex: newIndex };
      }
      return state;
    case "PREV_PAGE":
      if (activePageIndex > 0) {
        return { ...state, activePageIndex: activePageIndex - 1 };
      }
      return state;
    case "SET_STEP_COUNT":
      return { ...state, steps: action.payload };
    default:
      return state;
  }
};
const initialState = {
  activePageIndex: 0,
  steps: 0
};
/**
 * 
 * @param props 
 *  steps: number;
    activePageIndex: number;
    children: React.ReactNode;
 * @returns Wizard component with Context
 */
const Wizard = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const goNextPage = React.useCallback(() => {
    dispatch({ type: "NEXT_PAGE" });
  }, []);

  const goPrevPage = React.useCallback(() => {
    dispatch({ type: "PREV_PAGE" });
  }, []);

  const setSteps = React.useCallback(
    (steps: number) => {
      dispatch({ type: "SET_STEP_COUNT", payload: steps });
    },
    [dispatch]
  );
  const { activePageIndex, steps } = state;
  const context = {
    activePageIndex,
    steps,
    goNextPage,
    goPrevPage,
    setSteps
  };

  return (
    <WizardContext.Provider value={context}>
      <div>{children}</div>
    </WizardContext.Provider>
  );
};

export const WizardPages = (props: any) => {
  const { setSteps, activePageIndex } = useWizardContext();
  const pages = React.Children.toArray(props.children);
  const steps = React.Children.count(props.children);
  React.useEffect(() => {
    setSteps(steps);
  }, [steps, setSteps]);
  const currentPage = pages[activePageIndex];
  return <div {...props}>{currentPage}</div>;
};

export const WizardButtonPrev = (props: any) => {
  const { goPrevPage, activePageIndex } = useWizardContext();
  return activePageIndex > 0 ? (
    <Button type="primary" {...props} onClick={goPrevPage}>
      Back
    </Button>
  ) : null;
};


export const WizardButtonNext = () => {
  const { goNextPage, activePageIndex, steps } = useWizardContext();

  return activePageIndex < steps - 1 ? (
    <Button type="primary" onClick={goNextPage}>
      Next
    </Button>
  ) : null;
};

Wizard.ButtonNext = WizardButtonNext;
Wizard.ButtonPrev = WizardButtonPrev;
Wizard.Pages = WizardPages;
export default Wizard;
