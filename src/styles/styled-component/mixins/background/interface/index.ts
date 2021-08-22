import { Property } from 'csstype';

/**
 * Background Image Mixin Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.08.22
 */
export interface IBackgroundImageMixin {
  position?: Property.BackgroundPosition;
  repeat?: Property.BackgroundRepeat;
  size?: Property.BackgroundSize;
  url: string;
}
