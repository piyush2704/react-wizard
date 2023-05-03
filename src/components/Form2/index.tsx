import React, { useState } from 'react';
import { Checkbox, Divider } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Admin', 'Super User', 'User'];

type Props = {
  checkedValue: Array<string>
  onChange: (checkedValue: Array<CheckboxValueType>) => void;
}
const Form2: React.FC<Props> = (props: Props) => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(props.checkedValue);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onCheckboxChangeChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
   
  };

  React.useEffect(() => {
    props.onChange(checkedList);
  }, [checkedList])
  return (
    <>
     <h4>Form 2</h4>
     <Divider/>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onCheckboxChangeChange} />
    </>
  );
};

export default Form2;