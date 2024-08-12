import { Layout } from "antd";
import { useParams } from 'react-router-dom';

import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import IntroDetail from "../components/IntroDetail";
import introitems from "../json/Intro/introItems.json";
import IntroDetailRecommend from "../components/IntroItem"
import { useProductById } from '../react-query';
import { useActivitiesById, useActivities } from '../react-query';
const { Header, Content, Footer } = Layout;

function IntroductionCard() {
  const { introitemId } = useParams();
  const url = introitemId;
  console.log(url);
  //const introitem = introitems.find(
  //   (x) => x.id === introitemId
  //);
  const { data, isLoading } = useActivitiesById(url);
  console.log(data);
  const activities = data || {};
  console.log(activities);

 
  const alls = data?.data || [];
  console.log(alls);
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content>
          <IntroDetail introitem={activities} all={alls} />

        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default IntroductionCard;