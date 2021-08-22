import Head from 'next/head';
import Header from '../components/Header';
import BlogGrid from '../components/BlogGrid';
import Link from 'next/link';
import Strapi from '../components/apis/Strapi';

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  //const posts = await Strapi.get('/articles');

  const res = await fetch('https://surfskater-admin.herokuapp.com/articles');
  const posts = await res.json();

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Surfskater</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div
        className='hero w-full relative overflow-hidden z-0 bg-center bg-no-repeat bg-cover'
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 110, 110, 0.4), rgba(0, 110, 110, 0.4)), url("/featured1.jpg")',
        }}
      >
        <div className='herocontent py-24 md:py-32 lg:py-64 xl:py-64 px-4 md:px-12 mx-auto max-w-5xl text-center'>
          <h1 className='font-bold text-white  text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center uppercase'>
            Surfea la ciudad
          </h1>
          <p className='font-regular text-white text-center font-light text-xl md:text-2xl py-4'>
            Todo lo que necesitas saber sobre surfskate. Qué es el surfskate,
            tipos de surfskate, dónde practicarlo, cómo empezar, tutoriales,
            guías de compra de surfskate...
          </p>
          <div className='my-3 inline-flex'>
            <Link href='/posts/que-es-el-surfskate'>
              <a className='relative px-12 py-4 bg-gray-800 text-lg font-light tracking-wider text-white text-center rounded-full'>
                ¿Qué es el surfskate?
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 pt-8'>
        <BlogGrid posts={posts} />
      </div>
    </>
  );
}
