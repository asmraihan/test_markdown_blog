import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-[#061019]'>
      <header className='bg-gray-900 mb-8 py-4'>
        <div className='container mx-auto flex justify-between items-center text-white'>
          <Link href='/'>
            <a className='ml-10'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline mb-1 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
  Home</a>
          </Link>
          <span className='text-lg font-semibold mr-10'>Test Blog</span>{' '}
          <div>
            <button className='text-lg font-semibold mr-10 bg-black rounded-full'>BTN</button>
          </div>
        </div>
      </header>
      {/* <main className='container mx-auto bg-[#0D1117]'>{children}</main> */}
      {/* <main className='container mx-auto bg-[#061019]'>{children}</main> */}
      <main className='container mx-auto'>{children}</main>
      <footer className='bg-gray-900 mt-8 py-4'>
        <div className='container mx-auto flex justify-center text-white'>
          2023 &copy; Asm Raihan
        </div>
      </footer>
    </div>
  );
}