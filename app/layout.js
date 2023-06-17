import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gaming forum',
  description: 'Welcome to the gaming forum',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#ACC8E5] text-[#142C47] box-border">
      <main>
        <header>
          <div className="flex justify-evenly my-8">
            <div className="site-logo">
              <Link href="/">LOGO Gaming forum LOGO</Link>
            </div>
            <div className="user-signin">
              <div>GameByte Community</div>

              <ul>
                <li>
                  Username: <input />
                </li>
                <li>
                  Password: <input />
                  <button>Log in</button>
                  <button>Sign up</button>
                  <a>Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <tbody className={inter.className}>{children}</tbody>
      </main>
      <footer>
        <div className="flex justify-evenly my-20">
          <span>About Us</span>
          <span>Contacts</span>
        </div>
      </footer>
    </html>
  );
}
