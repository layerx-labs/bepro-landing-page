import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Section from '@/ui/Section';
import PanelGrid from '@/ui/PanelGrid';
import Panel from '@/ui/Panel';
import PillTabs from '@/ui/PillTabs';
import { Bounty, Community, Reward, Find, Build, GetPaid } from '@/utils/icons';
import GrantApplication from './design/GrantApplication';
import { ButtonLink } from '@taikai/rocket-kit';
import { useAnalytics } from '@/utils/analytics';

const How = () => {
  const router = useRouter();
  const tabs = [{ label: 'Organizations' }, { label: 'Builders' }];
  const [tab, setTab] = useState(0);
  const analytics = useAnalytics();

  useEffect(() => {
    const asPath = router.asPath;

    if (asPath === '/#org') {
      setTab(0);
    }

    if (asPath === '/#builders') {
      setTab(1);
    }
  }, [router.query, router.asPath]);

  return (
    <>
      <div id="org" className="sr-only" />
      <div id="builders" className="sr-only" />
      <Section subheading="Step by step" title="How to get started">
        <PillTabs
          buttons={tabs}
          selectedTab={tab}
          handleClick={(index: number) => {
            setTab(index);
          }}
        />
        <PanelGrid>
          {tab === 0 && (
            <>
              <Panel color="blue" icon={<Bounty />} title="Submit a task">
                <p>Create, describe and allocate a reward for the task.</p>
              </Panel>
              <Panel color="blue" icon={<Community />} title="Work with the community">
                <p>
                  Engage with your community and attract builders to deliver the right solution for
                  your project.
                </p>
              </Panel>
              <Panel color="blue" icon={<Reward />} title="Validate and reward">
                <p>
                  Validate or delegate validation powers to curators, approve the final work and pay
                  with your own token.
                </p>
              </Panel>
            </>
          )}

          {tab === 1 && (
            <>
              <Panel color="blue" icon={<Find />} title="Find Tasks to work on">
                <p>Explore and find the right tasks for you.</p>
              </Panel>
              <Panel color="blue" icon={<Build />} title="Start building">
                <p>Go solo or collaborate with other builders and contribute to projects.</p>
              </Panel>
              <Panel color="blue" icon={<GetPaid />} title="Get paid in crypto">
                <p>Once your submission has been reviewed and accepted, you get paid in crypto.</p>
              </Panel>
            </>
          )}
        </PanelGrid>
        <GrantApplication
          title="Infrastructure Grant Application"
          imgSrc="grand-application-bepro-symbol.svg"
          imgAlt="Infrastructure Grant Application"
        >
          <p>
            Access a set of builders features at Bepro Network, enabling you to launch multiple
            tasks, engage your community, and reward talented builders with your own $token.
          </p>
          <div>
            <ButtonLink
              color="blue500"
              url="https://layerx.typeform.com/to/J9x1po6T"
              value="Apply now"
              action={() => {
                analytics.pushEvent('grant_application_apply_button');
              }}
              rounded
              blank
            />
            <ButtonLink
              variant="outline"
              color="blue400"
              url="https://layerxlabs.notion.site/Introducing-the-Bepro-Network-Infrastructure-Grant-39e096cdabe34120b95acc0ac3ac6b31"
              value="Learn more"
              action={() => analytics.pushEvent('grant_application_learn_button')}
              rounded
              blank
            />
          </div>
        </GrantApplication>
      </Section>
    </>
  );
};

export default How;
