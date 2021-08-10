import { FC } from 'react';

import { useFooterContext } from '@/features/footer/hooks/footer.hooks';

/**
 * Footer Section Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
const Footer: FC = () => {
  const { state } = useFooterContext();

  return (
    <div>
      {state.footer.map(({ title }) => (
        <div key={title}>{title}</div>
      ))}
    </div>
  );
};

export default Footer;
