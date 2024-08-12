import { Layout } from "antd";
import { useSearchParams } from 'react-router-dom';

import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import RegisterCard from "../components/RegisterCard";

const { Header, Content, Footer } = Layout;

function Register() {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');
  
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Register Page" />
        </Header>
        <Content  style={{backgroundColor:"#F4F6FC"}}>
          <RegisterCard redirect={redirect} />
        </Content>
        <Footer className="layout-footer"  style={{backgroundColor:"#F4F6FC"}}>
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Register;