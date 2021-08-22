import Strapi from '../components/apis/Strapi';
import GridItem from './GridItem';

export default function BlogGrid({ posts }) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-12'>
      {posts.map((post) => (
        <GridItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
