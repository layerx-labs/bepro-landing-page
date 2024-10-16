import Section from '@/ui/Section';
import FeaturedBounties from '@/ui/FeaturedBounties';
import { ButtonLink } from '@taikai/rocket-kit';
import { BountiesCarrousel } from '@/utils/ldjson';
import { useAnalytics } from '@/utils/analytics';
import { IBeproApi } from 'lib/types';

interface FindProps {
  bounties: IBeproApi['rows'];
}

const Find = ({ bounties }: FindProps) => {
  const title = 'Find a task to work on';
  const analytics = useAnalytics();

  return (
    <>
      <BountiesCarrousel title={title} bounties={bounties} />
      <Section title={title} subheading="Featured tasks">
        <FeaturedBounties bounties={bounties} />
        <ButtonLink
          variant="outline"
          color="blue500"
          txtColor="white"
          url="https://app.bepro.network"
          value="See all tasks"
          action={() => {
            analytics.pushEvent('see_all_bounties_button');
          }}
          rounded
          blank
        />
      </Section>
    </>
  );
};

export default Find;
