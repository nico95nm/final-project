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
        <div className=" text-[2rem] mx-56 flex flex-col pt-8  text-white">
          <ul>
            <li>
              <div className={`${raleway.className} mainText pt-4 `}>
                <Link href="/components/announcements">Announcements</Link>
              </div>
              <p className="ml-10">
                This is a page for a this sites announcements.
              </p>

              <hr className="h-px my-8 bg-gray-200 border-0 bg-orange-600" />
            </li>
          </ul>

          <div>
            <nav>
              <ul>
                <li>
                  <div className={`${raleway.className} mainText pt-4`}>
                    <Link href="/topics/generalChat">General Games Chat</Link>
                  </div>
                  <p>
                    This is the forum to post any general topics relating to
                    gaming at large. Chat about your favorite games, recent
                    purchases and all the platforms.
                  </p>
                  <hr className="h-px my-8 bg-gray-200 border-0 bg-orange-600" />
                </li>

                <li>
                  <div className={`${raleway.className} mainText pt-4`}>
                    <Link href="/topics/gamingNews">Gaming News</Link>
                  </div>
                  <p>
                    Catch up on the latest buzz in the gaming world. Here you
                    can discuss news and rumors on games, developers and more.
                  </p>
                  <hr className="h-px my-8 bg-gray-200 border-0 bg-orange-600" />
                </li>

                <li>
                  <div className={`${raleway.className}  mainText pt-4`}>
                    <Link href="/topics/gamingTopic">Gaming Topic</Link>
                  </div>
                  <p>
                    This is the forum to post any general topics relating to
                    gaming at large. Chat about your favorite games, recent
                    purchases, etc.
                  </p>
                  <hr className="h-px my-8 bg-gray-200 border-0 bg-orange-600" />
                </li>

                <li>
                  <div className={`${raleway.className} mainText pt-4`}>
                    <Link href="/topics/gamingMusic">Gaming Music</Link>
                  </div>
                  <p>
                    Gaming forum buzzing with discussions on captivating video
                    game soundtracks, where users share favorites, recommend
                    hidden gems, and praise talented composers.
                  </p>
                  <hr className="h-px my-8 bg-gray-200 border-0 bg-orange-600" />
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <ul>
              <li>
                <div className={`${raleway.className} mainText pt-4`}>
                  <Link href="/topics/offTopic">Off Topics</Link>
                </div>
                <p>This is a paragraph</p>
                <hr className="h-px my-8 bg-gray-200 border-0 bg-orange-600" />
              </li>

              <li>
                <div className={`${raleway.className} mainText pt-4`}>
                  <Link href="/topics/generalChat">Intorduction</Link>
                </div>
                <p>This is a pasddsdagraph</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
