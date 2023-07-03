import styles from './rlv1.module.css';
import { Rlv3 } from '@vite-paths/rlv3';
import { Rlv2 } from '@vite-paths/rlv2';

/* eslint-disable-next-line */
export interface Rlv1Props {}

export function Rlv1(props: Rlv1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Rlv1!</h1>
      <Rlv2 />
      <Rlv3 />
    </div>
  );
}

export default Rlv1;
