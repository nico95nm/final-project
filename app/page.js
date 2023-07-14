import { Raleway } from 'next/font/google';
import Link from 'next/link';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '900',
});
export default function Home() {
  return (
    <main>
      <div className="m-6 grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-10 text-white">
        <div>
          <Link href="/components/announcements">
            <h1 className={raleway.className}>Announcements</h1>
          </Link>
          <p className="ml-10 my-4">
            Welcome to our Announcement Corner! This dynamic page serves as the
            central hub for all the exciting updates and breaking news related
            to our site. Stay connected and informed about the latest
            developments, upcoming events, and important announcements. From new
            features and enhancements to exclusive opportunities, this is your
            go-to destination for staying ahead of the curve. We are thrilled to
            share the latest happenings with you, so make sure to visit this
            vibrant corner regularly and be a part of our thriving community.
          </p>
        </div>

        <div>
          <h1 className={raleway.className}>General Games Chat</h1>
          <p className="ml-10 my-4">
            Welcome to our Gaming Discussion Forum! This dedicated space is the
            perfect platform for engaging in insightful conversations about
            gaming on a broader scale. Whether you're passionate about specific
            games, eager to share your recent gaming purchases, or interested in
            exploring various gaming platforms, this is the place to be. Connect
            with fellow gamers, exchange thoughts and experiences, and dive into
            the world of gaming from every angle. Let your enthusiasm flourish
            as you engage in discussions that span the vast realm of gaming.
            Join us here and let the gaming conversations begin!
          </p>
        </div>

        <div>
          <h1 className={raleway.className}>Gaming News</h1>
          <p className="ml-10 my-4">
            Welcome to the Gaming Buzz Hub! Immerse yourself in the thrilling
            realm of the gaming world and stay up to date with the latest buzz.
            This is the ultimate destination for passionate gamers like you to
            discuss and delve into the exciting news, rumors, and developments
            surrounding games, developers, and more. Engage in lively
            conversations, share your insights, and connect with fellow
            enthusiasts who share your love for gaming. From highly anticipated
            game releases to insider information and industry trends, this
            buzzing hub has it all. Join us here and be at the forefront of the
            gaming discourse, where excitement and knowledge collide!
          </p>
        </div>

        <div>
          <h1 className={`${raleway.className}`}>Gaming Topic</h1>
          <p className="ml-10 my-4">
            Welcome to our Gaming Enthusiasts Forum! This vibrant community is
            the perfect place to discuss a wide range of gaming topics that
            capture your passion. Dive into conversations about your favorite
            games, share your recent gaming purchases, and explore various
            aspects of the gaming world. Engage with fellow gamers, exchange
            recommendations, and discover new gems in the gaming landscape.
            Whether you're seeking game reviews, seeking advice on gaming
            hardware, or simply looking to connect with like-minded individuals,
            this forum is your go-to destination. Embrace the camaraderie,
            expand your gaming knowledge, and let the discussions ignite your
            gaming journey. Join us here and let the gaming conversations flow!
          </p>
        </div>

        <div>
          <h1 className={`${raleway.className}`}>Gaming Topic</h1>
          <p className="ml-10 my-4">
            Welcome to our Melodic Gaming Forum! Immerse yourself in a
            harmonious community where gaming and music intertwine. Here,
            passionate gamers like you gather to discuss captivating video game
            soundtracks, share their favorite musical masterpieces, uncover
            hidden gems, and commend the talented composers who bring virtual
            worlds to life. From epic orchestral scores to catchy melodies and
            atmospheric tunes, the air is filled with the symphonies of gaming.
            Engage in lively discussions, discover new soundtracks to enhance
            your gaming experience, and join in celebrating the remarkable
            fusion of music and gaming artistry. Let your love for captivating
            video game soundtracks soar as you connect with fellow enthusiasts
            who share your appreciation. Join us in this harmonious haven, where
            melodies and memories unite!
          </p>
        </div>

        <div>
          <h1 className={`${raleway.className}`}>Gaming Topic</h1>{' '}
          <p className="ml-10 my-4">
            Welcome to our Gaming Discussion Forum! This dedicated space is the
            perfect platform for engaging in insightful conversations about
            gaming on a broader scale. Whether you're passionate about specific
            games, eager to share your recent gaming purchases, or interested in
            exploring various gaming platforms, this is the place to be. Connect
            with fellow gamers, exchange thoughts and experiences, and dive into
            the world of gaming from every angle. Let your enthusiasm flourish
            as you engage in discussions that span the vast realm of gaming.
            Join us here and let the gaming conversations begin!
          </p>
        </div>
      </div>
    </main>
  );
}
