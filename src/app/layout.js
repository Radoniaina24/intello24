import Footer from '@/components/Footer/Footer';
import BoostrapBundle from '@/components/InstallBootstrap/BoostrapBundle';
import Navbar from '@/components/Navbar/Navbar';
import ScrollTopBtn from '@/components/scrollTopButon/scrollTopBtn';
import '@/theme/scss/bootstrap.scss';
import '@/theme/scss/styles.scss';
import '@fortawesome/fontawesome-svg-core';
import { Poppins } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
const poppins = Poppins({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
export const metadata = {
  title: {
    absolute: '',
    default: 'Intello',
    template: '%s | Intello',
  },
  description: 'Generated by create next app',
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <BoostrapBundle />
        <Navbar />
        {children}
        <Footer />
        <ScrollTopBtn />
      </body>
    </html>
  );
}
