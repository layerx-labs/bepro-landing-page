import getConfig from "next/config";
import Link from "next/link";
import Hero from "@/ui/Hero";
import { ButtonLink, Icon } from "@taikai/rocket-kit";
import { useAnalytics } from "@/utils/analytics";

const Intro = () => {
  const { publicRuntimeConfig } = getConfig();
  const analytics = useAnalytics();

  return (
    <Hero>
      <Link href={publicRuntimeConfig.webnetUrl}>
        <a target="_blank" rel="noopener noreferrer">
          <span className="status">New</span>
          <span className="version">
            Version {publicRuntimeConfig.webnetVersion} is live!
          </span>
          <Icon icon="arrowForward" />
        </a>
      </Link>
      <h1>Welcome to task-based work.</h1>
      <p>
        Bepro Network is a task-based marketplace created to help organizations and builders
        thrive. Organizations can easily create and launch tasks, while builders have the 
        opportunity to work on them and earn crypto as payment, providing a more efficient 
        and transparent collaboration.
      </p>
      <div>
        <ButtonLink
          color="blue500"
          url="https://app.bepro.network"
          value="Launch your first task"
          icon="arrow-external"
          iconPosition="right"
          action={() => {
            analytics.pushEvent("launch_first_bounty_button");
          }}
        />
        <ButtonLink
          variant="outline"
          color="blue500"
          url="https://app.bepro.network"
          value="Explore Tasks"
          icon="arrow-external"
          iconPosition="right"
          action={() => {
            analytics.pushEvent("discover_bounties_button");
          }}
        />
      </div>
    </Hero>
  );
};

export default Intro;
