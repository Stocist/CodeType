import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CodeType
          </h1>
          <p className="text-xl mb-8">
            Improve your typing speed and accuracy while learning programming documentation.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why CodeType?</h2>
            <ul className="space-y-2 text-left list-disc pl-6">
              <li>Practice typing with real programming documentation</li>
              <li>Learn coding concepts while improving your typing skills</li>
              <li>Track your WPM, accuracy, and progress over time</li>
              <li>Clean, minimal interface inspired by Monkeytype</li>
            </ul>
          </div>
          
          <Link 
            href="/typing-test" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Start Typing Test
          </Link>
        </div>
      </div>
    </main>
  );
} 