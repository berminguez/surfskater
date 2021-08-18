import Link from 'next/link';
export default function GridItem({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className=' py-20'>
          <div className=' bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200'>
            <img
              className='rounded-t-lg'
              src={process.env.STRAPI_HOST + post.image.url}
              alt=''
            />
            <div className='py-4 px-8'>
              <h1 className='hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight'>
                {post.title}
              </h1>
              <p className='hover:cursor-pointer py-3 text-gray-600 leading-6'>
                {post.description.substring(0, 150) + '...'}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
