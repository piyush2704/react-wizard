import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Wizard from "./components/ui/Wizard/Wizard";
import { Layout, Input } from "antd";
import Form1 from "./components/Form1";

const { Footer, Content } = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  justifyContent: "space-between",
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  padding:10,
  lineHeight: '120px',
};
const backStyle: React.CSSProperties = {
  marginRight: 5,
};



const Page2 = () => (
  <div>
    <h1>Pagina 2</h1>
  </div>
);
const Page3 = () => (
  <div>
    <h1>Pagina 3</h1>
  </div>
);

function App() {
  const handleNextClick = () => console.log("handled");
  return (
    <Layout>
      <Wizard steps={3} activePageIndex={1}>
        <Content style={contentStyle}>
          <Wizard.Pages>
            <Form1 />
            <Page2 />
            <Page3 />
          </Wizard.Pages>
        </Content>
        <Footer style={footerStyle}>
          <Wizard.ButtonPrev style={backStyle} />
          <Wizard.ButtonNext onClick={handleNextClick} />
        </Footer>
      </Wizard>
    </Layout>
  );
}

export default App;
