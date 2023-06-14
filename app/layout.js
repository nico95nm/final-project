import './layout.globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gaming forum',
  description: 'Welcome to the gaming forum',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <div className="header-container">
          <div className="site-logo">
            <a>LOGO Gaming forum LOGO</a>
          </div>
          <div className="user-signin">
            <ul>
              <li>
                Username: <input />
              </li>
              <li>
                Password: <input />
                <button>Log in</button>
                <a>Sign up</a>
                <a>Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <tbody className={inter.className}>{children}</tbody>
      </main>
      <footer>
        <span>About Us</span>
        <span>Constact</span>
      </footer>
    </html>
  );
}
