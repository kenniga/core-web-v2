/**
 * Footer Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export interface IFooter {
  item: IFooterItems[];
  title: string;
}

/**
 * Footer Items Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.08
 */
export interface IFooterItems {
  subtitle: string;
  url: string;
}
