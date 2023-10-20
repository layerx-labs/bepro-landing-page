import Section from '@/ui/Section';
import ProductShot from '@/ui/ProductShot';
import { rem } from 'polished';

const What = () => (
  <Section padding="xl">
    <ProductShot
      subheading="OnChain Task Marketplace"
      title="What's a task marketplace?"
      imgSrc="/product-shot--what.svg"
      imgAlt="Bepro Network - Bounty product shot"
    >
      <p style={{ marginTop: rem('20px') }}>
        The marketplace is the space where organizations can launch tasks and builders can work on
        them. Each task has its own set of deliverables and respective prize. Tasks can range from
        development, marketing, design, and more.
      </p>
    </ProductShot>
  </Section>
);

export default What;
