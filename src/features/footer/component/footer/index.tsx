import Link from 'next/link';
import { FC, Fragment } from 'react';

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
      {state.footer.map(({ item, title }) => (
        <Fragment key={title}>
          <div>{title}</div>
          {item.map(({ subtitle, url }) => (
            <Link href={url} key={url}>
              {subtitle}
            </Link>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Footer;
