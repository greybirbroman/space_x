import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
