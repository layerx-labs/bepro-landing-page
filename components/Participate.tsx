import Section from "@/ui/Section";
import ProductShot from "@/ui/ProductShot";

const Participate = () => (
  <Section
    title="Participate in tasks"
    subheading="For builders and curators"
    lightOn
  >
    <ProductShot
      title="Get recognized for your work"
      imgSrc="/product-shot--recognized.svg"
      imgAlt="Bepro - Custom Marketplace product shot"
    >
      <p>
        All the contributors on a task receive a onchain non-transferable NFT (ERC-721) as a recognition of their work.
      </p>
    </ProductShot>
    <ProductShot
      title="Take part in new projects"
      imgSrc="/product-shot--new-projects.svg"
      imgAlt="Bepro - Your own tokens product shot"
      invert
    >
      <p>Discover new projects to contribute to and get paid for your work.</p>
    </ProductShot>
    <ProductShot
      title="Curate the Marketplace"
      imgSrc="/product-shot--curate.svg"
      imgAlt="Bepro - Delegate product shot"
    >
      <p>
        Review Work and submit Proposals of task payment distributions, curate the Bepro Marketplaces and earn crypto.
      </p>
    </ProductShot>
  </Section>
);

export default Participate;
