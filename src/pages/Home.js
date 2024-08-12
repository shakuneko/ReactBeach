import { Layout,BackTop } from 'antd';
import { useParams } from 'react-router-dom';
import AppHeader from "../components/HeaderHome";
import AppFooter from "../components/Footer";
import Searchbox from "../components/Searchbox";
import Island from '../components/Island';
import MostPopular from '../components/MostPopular';
import SuggestInformation from '../components/SuggestInformation';
import suggests from '../json/suggest.json'

import activityhome from "../../src/json/activity.json";
import { useActivities } from '../react-query';

const { Header, Content, Footer } = Layout;

function Home() {
  const { suggestId } = useParams();
  const suggest = suggests.find(
    (x) => x.id === suggestId
  );

  /*get all activities */
  const { data, isLoading } = useActivities("");
  const activities = data?.data || [];

  return (
    <Layout className="container main-layout">
      <Header className="layout-header" style={{ backgroundColor: "transparent" }}>
        <AppHeader title="Beach Crab" />
      </Header>
      <Content className="layout-content">
        <div>
          <Searchbox />
        </div>
        <div>
          <Island />
        </div>
        <div>
          <MostPopular PopActs={activities} />
        </div>
        <div>
          <SuggestInformation />
        </div>
        <BackTop>
                <div className='back-to-top-btn'>TOP</div>
            </BackTop>

      </Content>
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Home;