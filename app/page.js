import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <div className="text-center">
          <Link href="/register">Register</Link>
        </div>
        <div>
          <div>
            <h2 className="font-inter box-border h-10 max-w-md flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
              GAMING FORUM - VIDEO GAME FORUMS
            </h2>
          </div>
          <ul>
            <li className="text-red">
              <Link href="/topics/announcements">Announcements</Link>
            </li>
          </ul>
          <div>
            <h2 className="font-inter box-border h-10 max-w-md flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
              VIDEO GAME DISCUSSIONS
            </h2>
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
            <h2 className="font-inter box-border h-10 max-w-md flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
              COMMUNITY
            </h2>
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
