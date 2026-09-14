import './globals.css';
import Footer from './components/Footer';
export const metadata = {
  title: 'SolarTech | Reliable Solar Energy Solutions',
  description: 'Custom solar installations, high-efficiency panels, and lithium battery storage for homes and businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white min-h-screen flex flex-col justify-between selection:bg-blue-500 selection:text-white">
        {/* Main page content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
