import { FC } from 'react';

import FooterFeatures from '@/features/footer';
import { useI18n } from '@/modules/i18n/hooks/i18n.hooks';

/**
 * Homepage View
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
const HomepageView: FC<Record<string, any>> = (props) => {
  const { t } = useI18n();

  return (
    <div>
      {t(`greet`)}
      <FooterFeatures footer={props.footer} />
    </div>
  );
};

export default HomepageView;
