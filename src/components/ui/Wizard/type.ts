export type WizardContextType = {
    activePageIndex: number;
    goNextPage: () => void;
    goPrevPage: () =>  void;
    steps: number;
}