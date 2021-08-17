export default function Footer() {
  return (
    <footer className='flex items-center justify-center w-full h-16 text-white border-niceblack bg-tertiary'>
      <a
        className='flex items-center justify-center'
        href='https://berminguez.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        Created by <span className='underline ml-2'>Bernardo Mínguez</span>
      </a>
    </footer>
  );
}
