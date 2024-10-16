import getConfig from 'next/config';
import { ButtonLink } from '@taikai/rocket-kit';
import Section from '@/ui/Section';
import CustomNetwork from '@/ui/CustomNetwork';
import { useAnalytics } from '@/utils/analytics';

const { publicRuntimeConfig } = getConfig();

const LaunchMarketplace = () => {
  const analytics = useAnalytics();

  return (
    <Section padding="s">
      <CustomNetwork
        title="Customization"
        subheading="Launch your own custom marketplace"
        imgSrc="product-shot--launch-network.svg"
        imgAlt="Launch your own custom marketplace"
      >
        <p>
          Incorporate your brand identity, pay with your own token and have a fully-customizable
          task marketplace for your organization. Contact us to learn more.
        </p>
        <div>
          <ButtonLink
            variant="outline"
            color="blue400"
            url={publicRuntimeConfig.demoRequestUrl}
            value="Talk with us for a demo"
            action={() => analytics.pushEvent('demo_button')}
            rounded
            blank
          />
        </div>
      </CustomNetwork>
    </Section>
  );
};

export default LaunchMarketplace;
