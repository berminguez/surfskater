import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_HOST + '/articles');
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //const id = params.id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_HOST}/articles/${params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post: post,
    },
  };
}

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <>
      <div className='py-12 px-4 bg-tertiary mb-6'>
        <h1 className='text-center text-white mx-auto font-bold text-4xl md:text-5xl '>
          {post.title}
        </h1>
      </div>
      <div className='container px-4 max-w-5xl mx-auto pb-12'>
        <div className='text-center py-12 text-lg font-normal italic'>
          <p>{post.description}</p>
        </div>
        <div className='dynamicContent font-sans text-lg text-gray-800'>
          {post.image ? (
            <div className='w-full mb-6 h-72 md:h-96 overflow-hidden'>
              <Image
                className=''
                src={post.image.url}
                alt={post.image.alternativeText}
                width={post.image.width}
                height={post.image.height}
                layout='responsive'
              />
            </div>
          ) : (
            <img />
          )}

          <ReactMarkdown
            className='markdown'
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Post;
