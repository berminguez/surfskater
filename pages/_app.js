import 'tailwindcss/tailwind.css';
import '/css/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center min-h-screen py-0'>
        <main className='w-full '>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
