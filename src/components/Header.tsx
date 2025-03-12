import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          CodeType
        </Link>
      </div>
      <nav className="flex gap-6">
        <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Home
        </Link>
        <Link href="/typing-test" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Start Test
        </Link>
      </nav>
    </header>
  );
};

export default Header; 