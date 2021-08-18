import Strapi from '../components/apis/Strapi';
import GridItem from './GridItem';

export default function BlogGrid({ posts }) {
  return (
    <ul className='grid grid-cols-4 gap-8'>
      {posts.map((post) => (
        <GridItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
