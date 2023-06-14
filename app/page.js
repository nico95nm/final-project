import Image from 'next/image';
import Link from 'next/link';
import styles from './page.global.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <h2>GAMING FORUM - VIDEO GAME FORUMS</h2>
          <ul>
            <li>
              <Link href="/annoucements">Annoucements</Link>
            </li>
          </ul>
          <div>
            <h2>VIDEO GAME DISCUSSIONS</h2>
            <nav>
              <ul>
                <li>
                  <Link href="/generalChat">General Chat</Link>
                </li>
                <li>
                  <Link href="/generalNews">Gaming News</Link>
                </li>
                <li>
                  <Link href="/generalTopic">Gaming Topic</Link>
                </li>
                <li>
                  <Link href="/generalMusic">Gaming Music</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>COMMUNITY</h2>
            <ul>
              <li>
                <Link href="/offTopic">Off Topics</Link>
              </li>
              <li>
                <Link href="/generalChat">Intorduction</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
