import styled from 'styled-components';
import { rem } from 'polished';
import { layout, colors, customNetwork, device } from '@/styles/variables';
import { WrapperProps } from './types';

export const Wrapper = styled.div<WrapperProps>`
  margin: ${layout.sectionTopBottomPadding} 0 calc(${layout.sectionTopBottomPadding} / 2 * -1);
  border: ${rem('1px')} solid ${colors.blue700};
  border-radius: ${customNetwork.borderRadius};
  background: radial-gradient(100% 100% at 50% 0%, #0e1230 0%, ${colors.blue950} 100%);
  text-align: center;

  img {
    margin-top: calc(${layout.sectionTopBottomPadding} / 2);
    width: ${rem('240px')};
    height: auto;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${rem('980px')};
  padding: 0 calc(${layout.sectionTopBottomPadding} / 2) ${layout.sectionTopBottomPadding};

  h2 {
    margin: ${rem('-110px')} 0 ${rem('24px')} 0;
    background: linear-gradient(180deg, ${colors.white} 50%, ${colors.blue500} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: ${colors.white};
  }

  p {
    color: ${customNetwork.color};
  }

  > div {
    margin: ${rem('28px')} 0 0 ${rem('-12px')};

    a {
      width: 100%;
      margin: ${rem('12px')} 0;

      &:last-child {
        span {
          color: ${colors.white};
        }
      }
    }
  }

  @media ${device.s} {
    h2 {
      font-size: ${rem('48px')};
    }

    > div {
      display: flex;
      justify-content: center;

      a {
        margin: ${rem('12px')};
        width: inherit;
      }
    }
  }
`;
