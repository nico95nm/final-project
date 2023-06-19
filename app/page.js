import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <div className="mx-56 flex flex-col justify-center  text-blue-600 ">
          <div>
            <h2 className=" font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
              IMPORTANT
            </h2>
          </div>
          <ul className=" p-2 flexbox justify-center items-center h-20 ">
            <li className="pl-10 flex items-start justify-around ">
              <span>icon</span>
              <div>
                <Link href="/topics/announcements">Announcements</Link>
                <p className="text-black">
                  This is a page for a this sites announcements.
                </p>
              </div>
              <dt>80</dt>
              <span>img</span>
              <span>username</span>
            </li>
          </ul>
          <div>
            <h2 className=" font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white ">
              VIDEO GAME DISCUSSIONS
            </h2>
            <nav>
              <ul className="pt-6 p-2 flexbox justify-center items-center ">
                <li className="pl-10 flex items-start justify-around	">
                  <span>icon</span>
                  <div>
                    <Link href="/topics/generalChat">General Games Chat</Link>
                    <p className="text-black trudance">
                      This is the forum to post any general topics relating to
                      gaming at large.
                      <br /> Chat about your favorite games, recent purchases
                      and all the platforms.
                    </p>
                  </div>
                  <dt>80</dt>
                  <span>img</span>
                  <span>username</span>
                </li>

                <li className="pl-10 flex items-start justify-around py-4">
                  <span>icon</span>
                  <div>
                    <Link href="/topics/gamingNews">Gaming News</Link>
                    <p className="text-black">
                      Catch up on the latest buzz in the gaming world.
                      <br /> Here you can discuss news and rumors on games,
                      developers and more.
                    </p>
                  </div>
                  <dt>80</dt>
                  <span>img</span>
                  <span>username</span>
                </li>

                <li>
                  <div className="pl-10 flex items-start justify-around py-4">
                    <span>icon</span>
                    <div>
                      <Link href="/topics/gamingTopic">Gaming Topic</Link>
                      <p className="text-black">
                        This is the forum to post any general topics relating to
                        gaming at large.
                        <br /> Chat about your favorite games, recent purchases,
                        etc.
                      </p>
                    </div>
                    <dt>80</dt>
                    <span>img</span>
                    <span>username</span>
                  </div>
                </li>

                <li className="pl-10 flex items-start	justify-around py-4">
                  <span>icon</span>
                  <div>
                    <Link href="/topics/gamingMusic">Gaming Music</Link>
                    <p className="text-black">
                      Gaming forum buzzing with discussions on captivating video
                      game soundtracks,
                      <br /> where users share favorites, recommend hidden gems,
                      and praise talented composers.
                    </p>
                  </div>
                  <dt>80</dt>
                  <span>img</span>
                  <span>username</span>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
              COMMUNITY
            </h2>
            <ul>
              <li className="pl-10 flex items-start justify-around py-8">
                <span>icon</span>
                <div>
                  <Link href="/topics/offTopic">Off Topics</Link>
                  <p className="text-black">This is a paragraph</p>
                </div>

                <dt>80</dt>
                <span>img</span>
                <span>username</span>
              </li>
              <li
                className="pl-10 flex
                          items-start justify-around py-8"
                style={{ color: 'red' }}
              >
                <span>icon</span>
                <div>
                  <Link href="/generalChat">Intorduction</Link>
                  <p className="text-black">This is a pasddsdagraph</p>
                </div>
                <div>
                  <dt>80</dt>
                </div>
                <span>img</span>
                <span>username</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
