import { IBaseBorderMixin } from '@/styled-component/mixins/border/interface';

export const BORDER_KEY = {
  all: `border`,
  bottom: `borderBottom`,
  left: `borderLeft`,
  right: `borderRight`,
  top: `borderTop`
};

export const DEFAULT_BORDER_ATTRIBUTE: IBaseBorderMixin = {
  color: `transparent`,
  type: `solid`,
  width: 0
};
