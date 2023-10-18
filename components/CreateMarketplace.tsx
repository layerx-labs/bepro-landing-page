import Section from "@/ui/Section";
import ProductShot from "@/ui/ProductShot";

const CreateMarketplace = () => (
  <Section
    title="Create your custom marketplace"
    subheading="For organizations"
    lightOn
  >
    <ProductShot
      title="Custom Marketplace"
      imgSrc="/product-shot--custom-network.svg"
      imgAlt="Bepro - Custom marketplace product shot"
      invert
    >
      <p>
        Any Organization, DAO, Layer 1 or Layer 2 protocols are able to launch
        their own task marketplace using their own branding, token and community.
      </p>
    </ProductShot>
    <ProductShot
      title="Reward with your $token"
      imgSrc="/product-shot--tokens.svg"
      imgAlt="Bepro - Your own tokens product shot"
    >
      <p>
        Create and manage tasks using your own token. Ability to use USDC or
        any other ERC-20 as the payment currency.
      </p>
    </ProductShot>
    <ProductShot
      title="Power to the community"
      imgSrc="/product-shot--delegate.svg"
      imgAlt="Bepro - Delegate product shot"
      invert
    >
      <p>
        Select your own curators or delegate it to the community to review and
        create proposals for the task reward distributions.
      </p>
    </ProductShot>
  </Section>
);

export default CreateMarketplace;
