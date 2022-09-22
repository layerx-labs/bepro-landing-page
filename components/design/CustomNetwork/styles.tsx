import styled from "styled-components";
import { rem } from "polished";
import { layout, colors, typography, customNetwork } from "@/styles/variables";

export const Wrapper = styled.div`
  border: ${rem("1px")} solid ${colors.blue700};
  border-radius: ${customNetwork.borderRadius};
  background-color: ${customNetwork.backgroundColor};
  background-image: url("product-shot--launch-network.svg");
  background-repeat: no-repeat;
  background-position: bottom right;
`;

export const Content = styled.div`
  max-width: calc(50% - calc(${layout.sectionTopBottomPadding} / 2));
  padding: ${layout.sectionTopBottomPadding}
    calc(${layout.sectionTopBottomPadding} / 2);
  text-align: left;

  > span {
    font-size: ${rem("16px")};
    font-weight: ${typography.fontWeigthMedium};
    color: ${customNetwork.subHeadingColor};
    text-transform: uppercase;
  }

  h2 {
    margin: ${rem("12px")} 0 ${rem("40px")} 0;
  }

  p {
    color: ${customNetwork.color};
  }

  > div {
    margin: ${rem("28px")} 0 0 ${rem("-12px")};
    display: flex;

    a {
      margin: ${rem("12px")};

      &:last-child {
        span {
          color: ${colors.white};
        }
      }
    }
  }
`;
