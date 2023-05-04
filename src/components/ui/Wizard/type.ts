
export interface WizardContextType {
   /** Contains current active page index */
    activePageIndex: number;
    /** Handles on click next page event */
    goNextPage: () => void;
     /** Handles on click previous page event */
    goPrevPage: () =>  void;

     /** Callback function to set step count */
    setSteps: (steps: number) => void;
    /** Total number of steps */
    steps: number;
}

export type FieldData = {
    name: string | number | (string | number)[];
    value?: any;
  }
  
  
  export type CustomizedFormProps =  {
    onChange: (fields: FieldData[]) => void;
    fields: FieldData[];
  }