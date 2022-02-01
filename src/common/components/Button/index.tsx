import styles from './style.module.css';
const classNames = require(`classnames`);

export default function Button({ children, ...props }) {
  const classnames = classNames({
    [`${styles.button}`]: true
  });
  return (
    <button className={classnames} {...props}>
      {children}
    </button>
  );
}
