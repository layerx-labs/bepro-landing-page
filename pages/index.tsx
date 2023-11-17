import type { NextPage } from 'next';
import SiteHead from 'components/SiteHead';
import Nav from 'components/Nav';
import Intro from 'components/Intro';
import What from 'components/What';
import Workflows from 'components/Workflows';
import Participate from 'components/Participate';
import Find from 'components/Find';
import Audited from 'components/Audited';
import Partners from 'components/Partners';
import Community from 'components/Community';
import Stories from 'components/Stories';
import Newsletter from 'components/Newsletter';
import Footer from 'components/Footer';
import { initializeApollo, APOLLO_STATE_PROP_NAME } from '../config/apolloClient';
import { useStories } from '../hooks/use-stories';
import { STORIES_QUERY } from '../graphql/stories-list-query';
import { getRequest } from 'lib/fetch-api';
import { IBeproApi } from 'lib/types';
import CreateMarketplace from 'components/CreateMarketplace';
import LaunchMarketplace from 'components/LaunchMarketplace';

const Home: NextPage = ({ bounties }: any) => {
  const { loading, error, data } = useStories({ page: 0 });

  return (
    <>
      <SiteHead />
      <Nav />
      <Intro />
      <What />
      <Workflows />
      <CreateMarketplace />
      <Participate />
      <Find bounties={bounties ?? []} />
      <Audited />
      <LaunchMarketplace />
      <Partners />
      <Community />
      <Stories data={data} loading={loading} error={error} />
      <Newsletter />
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await getRequest<IBeproApi>(`/search/tasks`).catch(_ => ({ data: null }));

  await apolloClient.query({
    query: STORIES_QUERY,
  });

  return {
    props: {
      bounties: data?.rows ?? [],
      [APOLLO_STATE_PROP_NAME]: apolloClient.cache.extract(),
    },
  };
}

export default Home;
