import { GrantApplicationProps } from './types';
import * as Styles from './styles';

const GrantApplication = (props: GrantApplicationProps) => {
  const { title, children, imgSrc, imgAlt } = props;

  return (
    <Styles.Wrapper imgSrc={imgSrc}>
      <img src={imgSrc} alt={imgAlt} />
      <Styles.Content>
        <h2>{title}</h2>
        {children}
      </Styles.Content>
    </Styles.Wrapper>
  );
};

export default GrantApplication;
