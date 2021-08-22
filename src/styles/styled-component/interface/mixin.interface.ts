import { SerializedStyles } from '@emotion/react';
import { ReactText } from 'react';

/**
 * Mixin GeneratorInterface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export type IMixin<P = { value: ReactText }> = (props: P) => SerializedStyles;
