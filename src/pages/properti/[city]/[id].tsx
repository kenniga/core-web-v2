import { gql } from '@apollo/client';
import Image from 'next/image';

import Header from '@/features/Header';
import client from '@/modules/apollo/apollo-client';

/**
 * Homepage Apps
 */
export default function PropertyPage(props) {
  const { medias } = props.data;
  console.debug(`====CEK SINI BOS`, medias[0].mediaInfo[0]);

  return (
    <>
      <Header />
      <section>
        <Image
          src={medias[0].mediaInfo[0].mediaUrl}
          layout="fill"
          alt="property"
        />
      </section>
    </>
  );
}

/**
 *
 * @param param0
 * @returns
 */
export async function getStaticProps({ params }) {
  const { id } = params;

  const portalId = 1;
  const GET_PROPERTY_BY_ID = gql`
    query GetPropertyByOriginID($request: GetPropertyByOriginIDRequest) {
      GetPropertyByOriginID(request: $request) {
        property {
          uuid
          medias {
            count
            mediaType
            mediaInfo {
              mediaUrl
            }
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GET_PROPERTY_BY_ID,
    variables: {
      request: {
        id,
        portalId
      }
    }
  });

  return {
    props: {
      data: data.GetPropertyByOriginID.property
    }
  };
}

/**
 *
 * @returns
 */
export async function getStaticPaths() {
  return { fallback: `blocking`, paths: [] };
}
