import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <div className="mx-56 flex flex-col justify-center  text-blue-600 ">
          <div>
            <h2 className=" font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
              GAMING FORUM - VIDEO GAME FORUMS
            </h2>
          </div>
          <ul>
            <li
              className="pl-10 flex
                          items-start justify-around	"
            >
              <span className="">icon</span>
              <div className="">
                <Link href="/topics/announcements">Announcements</Link>
                <p className="text-black">
                  This is a page for a this sites announcements.
                </p>
              </div>
              <div className="p-5">
                <dt>80</dt>
              </div>
              <div>
                <span className="px-8">img</span>
                <span>username</span>
              </div>
            </li>
          </ul>
          <div>
            <h2 className=" font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white ">
              VIDEO GAME DISCUSSIONS
            </h2>
            <nav>
              <ul>
                <li
                  className="pl-10 flex
                          items-start justify-around	"
                >
                  <span className="">icon</span>
                  <div className="p-8">
                    <Link href="/topics/generalChat">General Games Chat</Link>
                    <p className="text-black">
                      This is the forum to post any general topics relating to
                      gaming at large. Chat about your favorite games, recent
                      purchases and all the platforms.
                    </p>
                  </div>
                  <div className="p-8">
                    <dt className="p-8">80</dt>
                  </div>
                  <div>
                    <span className="p-8 ">img</span>
                    <span className="">username</span>
                  </div>
                </li>
                <li
                  className="pl-10 flex
                          items-start justify-around	"
                >
                  <span className="p-8">icon</span>
                  <div className="p-8">
                    <Link href="/topics/gamingNews">Gaming News</Link>
                    <p className="text-black">
                      Catch up on the latest buzz in the gaming world. Here you
                      can discuss news and rumors on games, developers and more.
                    </p>
                  </div>
                  <div className="p-8">
                    <dt>80</dt>
                  </div>
                  <div>
                    <span className="p-8">img</span>
                    <span>username</span>
                  </div>
                </li>
                <li
                  className="pl-10 flex
                          items-start justify-around"
                >
                  <span className="p-8">icon</span>
                  <div className="p-8">
                    <Link href="/topics/gamingTopic">Gaming Topic</Link>
                    <p className="text-black">
                      This is the forum to post any general topics relating to
                      gaming at large. Chat about your favorite games, recent
                      purchases, etc.
                    </p>
                  </div>
                  <div className="p-8">
                    <dt>80</dt>
                  </div>
                  <div>
                    <span className="p-8">img</span>
                    <span>username</span>
                  </div>
                </li>
                <li
                  className="pl-10 flex
                          items-start	justify-around	"
                >
                  <span className="p-8">icon</span>
                  <div className="p-8">
                    <Link href="/topics/gamingMusic">Gaming Music</Link>
                    <p className="text-black">This is a paragraph</p>
                  </div>
                  <div className="p-8">
                    <dt>80</dt>
                  </div>
                  <div>
                    <span className="p-8">img</span>
                    <span>username</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
              COMMUNITY
            </h2>
            <ul>
              <li
                className="pl-10 flex
                          items-start justify-around	"
              >
                <span className="p-8">icon</span>
                <div className="p-8">
                  <Link href="/topics/offTopic">Off Topics</Link>
                  <p className="text-black">This is a paragraph</p>
                </div>
                <div>
                  <dt>80</dt>
                </div>
                <div>
                  <span className="p-8">img</span>
                  <span>username</span>
                </div>
              </li>
              <li
                className="pl-10 flex
                          items-start justify-around"
              >
                <span className="p-8">icon</span>
                <div className="p-8">
                  <Link href="/generalChat">Intorduction</Link>
                  <p className="text-black">This is a pasddsdagraph</p>
                </div>
                <div>
                  <dt>80</dt>
                </div>
                <div>
                  <span className="p-8">img</span>
                  <span>username</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
