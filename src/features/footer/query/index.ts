import { gql } from '@apollo/client';

export const FOOTER_QUERY = gql`
  query GetFooterQuery($request: GetFooterRequest) {
    GetFooter(request: $request) {
      footer {
        title
        footerItems {
          subtitle
          url
        }
      }
    }
  }
`;
