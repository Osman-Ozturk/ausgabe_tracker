import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header
          style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
        >
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px ",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
          />
        </Header>
        <Content className="site-layout" style={{ padding: "50px" }}>
          <Routes>
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>Expense Tracker</Footer>
      </Layout>
    </div>
  );
}

export default App;
