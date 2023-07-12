import { Raleway } from 'next/font/google';
import Link from 'next/link';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '400',
});
export default function Home() {
  return (
    <main>
      <div>
        <div className="mx-56 flex flex-col  text-pink-800">
          <ul>
            <li>
              <div className={`${raleway.className}  py-8`}>
                <Link href="/components/announcements">Announcements</Link>

                <p>This is a page for a this sites announcements.</p>
              </div>
            </li>
          </ul>
          <br />
          <br />
          <div>
            <nav>
              <ul>
                <li>
                  <div className="textLine">
                    <Link href="/topics/generalChat">General Games Chat</Link>
                    <p>
                      This is the forum to post any general topics relating to
                      gaming at large. Chat about your favorite games, recent
                      purchases and all the platforms.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="textLine">
                    <Link href="/topics/gamingNews">Gaming News</Link>
                    <p>
                      Catch up on the latest buzz in the gaming world. Here you
                      can discuss news and rumors on games, developers and more.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="textLine">
                    <Link href="/topics/gamingTopic">Gaming Topic</Link>
                    <p>
                      This is the forum to post any general topics relating to
                      gaming at large. Chat about your favorite games, recent
                      purchases, etc.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="textLine">
                    <Link href="/topics/gamingMusic">Gaming Music</Link>
                    <p>
                      Gaming forum buzzing with discussions on captivating video
                      game soundtracks, where users share favorites, recommend
                      hidden gems, and praise talented composers.
                    </p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <br />
          <br />
          <div>
            <ul>
              <li>
                <div className="textLine">
                  <Link href="/topics/offTopic">Off Topics</Link>
                  <p>This is a paragraph</p>
                </div>
              </li>

              <li>
                <div className="textLine">
                  <Link href="/topics/generalChat">Intorduction</Link>
                  <p>This is a pasddsdagraph</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
