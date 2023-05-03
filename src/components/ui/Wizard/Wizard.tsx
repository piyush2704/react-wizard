import React from "react";
import { useWizardContext } from "./useWizard";
import { WizardContext } from "./WizardContext";
import { Button } from "antd";

type Props = {
  steps: number;
  activePageIndex: number;
  children: React.ReactNode;
};

const Wizard = (props: Props) => {
  const { children, steps } = props;
  const [activePageIndex, setActivePageIndex] = React.useState(0);
  
  const goNextPage = () => {
    setActivePageIndex((index) => index + 1);
  };

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1);
  };

  const context = {
    activePageIndex,
    goNextPage,
    goPrevPage,
    steps,
  };

  return (
    <WizardContext.Provider value={context}>
      <div>{children}</div>
    </WizardContext.Provider>
  );
};

export const WizardPages = (props: any) => {
  const { activePageIndex } = useWizardContext();
  const pages = React.Children.toArray(props.children);
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

type WizardButtonNextProps = {
  handleClick: (activePageIndex: number) => void;
  isPromiseFulfilled: string
}
export const WizardButtonNext: React.FC<WizardButtonNextProps>= ({handleClick, isPromiseFulfilled}) => {
  const { goNextPage, activePageIndex, steps } = useWizardContext();
  React.useEffect(() => {
    if(isPromiseFulfilled === 'fulfilled' || isPromiseFulfilled ===  'nextstep') {
      goNextPage()
    }
  }, [isPromiseFulfilled])

  return activePageIndex < steps - 1 ? (
    <Button type="primary" onClick={() => handleClick(activePageIndex)}>
      Next
    </Button>
  ) : null;
};

Wizard.ButtonNext = WizardButtonNext;
Wizard.ButtonPrev = WizardButtonPrev;
Wizard.Pages = WizardPages;
export default Wizard;
