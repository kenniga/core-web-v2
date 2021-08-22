import { SerializedStyles } from '@emotion/react';

/**
 * Mixin GeneratorInterface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export type IMixin<P = Record<string, any>> = (props: P) => SerializedStyles;
