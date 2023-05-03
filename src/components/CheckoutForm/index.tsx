import { Card, Form, Input, Layout } from 'antd';

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    display: 'flex',
    justifyContent: 'left',
    padding:10,
    lineHeight: '120px',
  };

  type Props = {
    form1: any;
    form2: any;
  }
  const CheckoutForm: React.FC<Props> = ({form1, form2}) => (
    <div style={{display: 'flex', justifyContent: "space-between"}}>
        <Card type="inner" title="Form Details1" bordered={false} style={{ width: 300 }}>
     <ol>
      <li>
        Name: {form1[0]?.value}
      </li>
      <li>
        Description: {form1[1]?.value}
      </li>
     </ol>
  </Card>
  <Card type="inner" title="Form Details 2" bordered={false} style={{ width: 300 }}>
  <ol>
    {form2?.map((val: string) => {
      return <li>{val}</li>
    })}
        
        </ol>
  </Card>
    </div>
  );

  export default CheckoutForm;