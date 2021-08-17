import Head from 'next/head';
import Header from '../components/Header';
import BlogGrid from '../components/BlogGrid';
import Link from 'next/link';

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const res = await fetch('http://localhost:1337/articles');
  const posts = await res.json();

  //   const result = await Strapi.get('/articles')
  //     .then((posts) => {
  //       console.log(posts);
  //       return {
  //         props: {
  //           posts,
  //         },
  //       };
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });

  return {
    props: {
      posts,
    },
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
          backgroundImage: 'url("/featured1.jpg")',
        }}
      >
        <div className='herocontent py-24 md:py-32 lg:py-64 xl:py-64 mx-auto max-w-4xl text-center'>
          <h1 className='font-bold text-white text-2xl text-center uppercase'>
            Surfea la ciudad
          </h1>
          <p className='font-regular text-white text-center'>
            Todo lo que necesitas saber sobre surfskate. Qué es el surfskate,
            tipos de surfskate, dónde practicarlo, cómo empezar, tutoriales,
            guías de compra de surfskate...
          </p>
          <div className='my-3 inline-flex'>
            <Link href='/posts/1'>
              <a className='relative px-12 py-4 bg-tertiary text-white text-center rounded-full'>
                ¿Qué es el surfskate?
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6'>
        <BlogGrid posts={posts} />
      </div>
    </>
  );
}
