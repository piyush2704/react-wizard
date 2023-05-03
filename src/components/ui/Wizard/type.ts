
export interface WizardContextType {
    activePageIndex: number;
    goNextPage: () => void;
    goPrevPage: () =>  void;
    steps: number;
}

export type FieldData = {
    name: string | number | (string | number)[];
    value?: any;
    touched?: boolean;
    validating?: boolean;
    errors?: string[];
  }
  
  
  export type CustomizedFormProps =  {
    onChange: (fields: FieldData[]) => void;
    fields: FieldData[];
  }