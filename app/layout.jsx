import './globals.css';

export const metadata = {
  title: 'LITESOLARSOLUTIONS | Reliable Solar Energy',
  description: 'Illuminateing your world with affordable solar solutions and reliable power.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
