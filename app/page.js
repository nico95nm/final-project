import Image from 'next/image';
import styles from './page.global.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <ul>
            <li>
              <a>Annoucement</a>
            </li>
          </ul>
          <span>General Chat</span> <br />
          <span>Gaming News</span> <br />
          <span>Gaming Topic</span> <br />
          <span>Gaming Music</span> <br />
          <span>Annoucement</span> <br />
          <span>Annoucement</span>
        </div>
      </div>
    </main>
  );
}
