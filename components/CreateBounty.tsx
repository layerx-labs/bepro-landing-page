import Section from "@/ui/Section";
import ProductShot from "@/ui/ProductShot";

//TODO: removed from the main page. Requires adjustments (which have not yet been designed) that will be carried out in the future
const CreateBounty = () => (
  <Section
    title="How to create a bounty"
    subheading="For developers and organizations"
    lightOn
  >
    <ProductShot
      title="Launch your bounties"
      imgSrc="/product-shot--bounty.svg"
      imgAlt="Bepro - Bounty product shot"
    >
      <p>
        Start building in a few steps - a quick and easy process to launch your
        Bounty.
      </p>
    </ProductShot>
    <ProductShot
      title="Manage disputes"
      imgSrc="/product-shot--dispute.svg"
      imgAlt="Bepro - Dispute product shot"
      invert
    >
      <p>Simple management system to handle disputes in the network.</p>
    </ProductShot>
    <ProductShot
      title="Funding requests"
      imgSrc="/product-shot--funding.svg"
      imgAlt="Bepro - Funding request product shot"
    >
      <p>
        Contributors can propose the development of new features and products,
        and request funding.
      </p>
    </ProductShot>
  </Section>
);

export default CreateBounty;
