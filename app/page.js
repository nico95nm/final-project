import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/register">Register</Link>
        <div>
          <div className={styles.test}>
            <h2>GAMING FORUM - VIDEO GAME FORUMS</h2>
          </div>
          <ul>
            <li>
              <Link href="/topics/announcements">Announcements</Link>
            </li>
          </ul>
          <div>
            <h2 className='widget-title"'>VIDEO GAME DISCUSSIONS</h2>
            <nav>
              <ul>
                <li>
                  <Link href="/topics/generalChat">General Chat</Link>
                </li>
                <li>
                  <Link href="/topics/gamingNews">Gaming News</Link>
                </li>
                <li>
                  <Link href="/topics/gamingTopic">Gaming Topic</Link>
                </li>
                <li>
                  <Link href="/topics/gamingMusic">Gaming Music</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>COMMUNITY</h2>
            <ul>
              <li>
                <Link href="/topics/offTopic">Off Topics</Link>
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
