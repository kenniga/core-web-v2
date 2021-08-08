import { FC } from 'react';

import Footer from './component/footer';
import { useFooter } from './hooks/footer.hooks';
import FooterContext from './context';
import { IFooterInitialProps } from './interface';

/**
 * Footer Features Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
const FooterFeatures: FC<IFooterInitialProps> = (props) => {
  const { action, state } = useFooter(props);

  return (
    <FooterContext.Provider
      value={{
        action,
        state
      }}
    >
      <Footer />
    </FooterContext.Provider>
  );
};

export default FooterFeatures;
