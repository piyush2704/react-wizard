import React from "react";
import "./App.css";
import Wizard from "./components/ui/Wizard/Wizard";
import { Layout } from "antd";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import CheckoutForm from "./components/CheckoutForm";
import { FieldData } from "./components/ui/Wizard/type";

const { Content } = Layout;

const layoutStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "none",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  margin: 10,
  background: "white",
  padding: 10,
  minWidth: 800,
  border: "1px solid #ccc",
  lineHeight: "120px",
  boxShadow: "1px 1px 1px",
  maxWidth: 800,
};
const backStyle: React.CSSProperties = {
  marginRight: 5,
};

function App() {
  const [form1Fields, setForm1Fields] = React.useState<FieldData[]>([]);
  const [form2Fields, setForm2Fields] = React.useState();
  const [apiCallStatus, setApiCallStatus] = React.useState("idle");
  const handleClick = (activePageIndex: number) => {
    if (activePageIndex === 0) {
      setApiCallStatus("pending");
      setTimeout(() => {
        if (form1Fields[0]?.value.lenght > 63) {
          alert("name size greater than 63"); 
        } else {
          setApiCallStatus("fulfilled");
        }
      }, 1000);
    } else {
      setApiCallStatus("nextstep");
    }
  };
  return (
    <Wizard steps={3} activePageIndex={1}>
      <Layout style={layoutStyle}>
        <Content style={contentStyle}>
          <Wizard.Pages>
            <Form1
              onChange={(newFields) => {
                setForm1Fields(newFields as any);
              }}
              fields={form1Fields as any}
            />
            <Form2
              onChange={(newFields) => {
                setForm2Fields(newFields as any);
              }}
              checkedValue={form2Fields as any}
            />
            <CheckoutForm form1={form1Fields} form2={form2Fields} />
          </Wizard.Pages>

          <Wizard.ButtonPrev style={backStyle} />
          <Wizard.ButtonNext
            isPromiseFulfilled={apiCallStatus}
            handleClick={handleClick}
          />
        </Content>
      </Layout>
    </Wizard>
  );
}

export default App;
