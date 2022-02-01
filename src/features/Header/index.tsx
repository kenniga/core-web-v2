import Image from 'next/image';

import Button from '@/common/components/Button';

import styles from './style.module.css';

export default function Header() {
  const handleMenuClick = (e) => console.debug(e);

  return (
    <header className={styles.header}>
      <Image
        src="https://public.urbanindo.com/style-guide/r123-logo.svg"
        height={24}
        width={206}
        alt="logo"
      />
      <Button onClick={handleMenuClick}>
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.125"
            width="20.9999"
            height="1.74999"
            fill="white"
          />
          <rect
            x="0.5"
            y="7.12512"
            width="20.9999"
            height="1.74999"
            fill="white"
          />
          <rect
            x="0.5"
            y="14.1249"
            width="20.9999"
            height="1.74999"
            fill="white"
          />
        </svg>
      </Button>
    </header>
  );
}
