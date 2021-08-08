import { Ii18nLocales } from '@/interface/general';

/**
 * Basic Service Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export interface IBasicServiceProps {
  language: Ii18nLocales;
  page: string;
  token?: string;
  tracker: string[];
}
