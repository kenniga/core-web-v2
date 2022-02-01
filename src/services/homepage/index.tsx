import { FC } from 'react';

import FooterFeatures from '@/features/footer';

/**
 * Homepage View
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
const HomepageView: FC<Record<string, any>> = (props) => {
  return (
    <div>
      <FooterFeatures footer={props.footer} />
    </div>
  );
};

export default HomepageView;
