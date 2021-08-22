import Link from 'next/link';
export default function GridItem({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className=' py-2'>
          <div className=' bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200'>
            {post.image ? (
              <div className='h-40'>
                <img
                  className='rounded-t-lg object-cover h-40 w-full'
                  src={post.image.url}
                  alt=''
                />
              </div>
            ) : (
              <img />
            )}
            <div className='py-4 px-8'>
              <div className='h-16'>
                <h1 className='hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight'>
                  {post.title}
                </h1>
              </div>
              <div className='h-32 overflow-hidden py-2'>
                <p className='hover:cursor-pointer py-3 text-gray-600 leading-6'>
                  {post.description.substring(0, 75) + '...'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
