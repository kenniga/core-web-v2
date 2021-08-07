import { IRenderedHTML, NullAble } from '@/interface/general';
import { IApolloConnection } from '@/modules/apollo/interface';

/**
 * Gql Client Singleton
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.07
 */
class GqlClient {
  private static: NullAble<IApolloConnection>;

  /**
   * Method Name
   * @description
   */
  public static singleton(
    type: IRenderedHTML = `server`
  ): NullAble<IApolloConnection> {
    switch (type) {
      case `server`: {
        break;
      }

      default:
        break;
    }

    return undefined;
  }
}

export default GqlClient;
