import { CSSTransition } from 'react-transition-group';

export default function Drawer({ animationType, children, isOpen }) {
  return (
    <CSSTransition isOpen={isOpen} classNames={animationType}>
      {children}
    </CSSTransition>
  );
}
