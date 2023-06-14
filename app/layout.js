import './layout.globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gaming forum',
  description: 'Welcome to the gaming forum',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main>
        <header>
          <div className="header-container">
            <div className="site-logo">
              <Link href="/">LOGO Gaming forum LOGO</Link>
            </div>
            <div className="user-signin">
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
        <span>About Us</span>
        <span>Constact</span>
      </footer>
    </html>
  );
}
