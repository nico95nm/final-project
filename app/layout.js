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
        <span>Gaming forum</span>
        <span>Profile</span>
        <span>Username</span>
        <span>Password</span>
        <button>Log in</button>
        <span>Register for your free account!</span>
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
