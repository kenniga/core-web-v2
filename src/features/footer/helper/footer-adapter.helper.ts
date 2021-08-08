import { verifiedIsNotEmpty } from '@99/helper';

import { IFooter } from '@/features/footer/interface';
import { NullAble } from '@/interface/general';
import { PickGql } from '@/interface/graphql';

/**
 * Translate Get Footer From GQL Into Footer Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export const translateFooter = ({
  GetFooter
}: NullAble<PickGql<'GetFooter'>> = {}): IFooter[] => {
  if (GetFooter) {
    const { footer } = GetFooter;

    return footer.filter(verifiedIsNotEmpty).map(
      ({ title, footerItems = [] }): IFooter => ({
        item: footerItems
          .filter(verifiedIsNotEmpty)
          .map(({ subtitle, url }) => ({
            subtitle,
            url
          })),
        title
      })
    );
  }

  return [];
};
