/**
 * Object To String
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {Record<string, string>} obj - object classname
 * @since 2021.01.24
 */
export const IsProduction = (): boolean =>
  process.env.NEXT_PUBLIC_IS_PRODUCTION === `true`;

/**
 * Object To String
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {Record<string, string>} obj - object classname
 * @since 2021.01.24
 */
export const IsDeployOnProduction = (): boolean =>
  process.env.IS_DEPLOY_PRODUCTION === `true`;
