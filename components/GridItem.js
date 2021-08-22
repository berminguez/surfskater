import Link from 'next/link';
import Image from 'next/image';
export default function GridItem({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className=' py-2'>
          <div className=' bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200'>
            {post.image ? (
              <div className='h-40'>
                {post.image.url ? (
                  <div className='rounded-t-lg h-40 w-full overflow-hidden'>
                    <Image
                      className=''
                      src={post.image.formats.small.url}
                      alt={post.image.alternativeText}
                      width={post.image.formats.small.width}
                      height={post.image.formats.small.height}
                      layout='responsive'
                    />
                  </div>
                ) : (
                  <img />
                )}
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
