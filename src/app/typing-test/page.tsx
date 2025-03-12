'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import TypingArea from '@/components/TypingArea';
import { getRandomSnippet, DocumentSnippet } from '@/lib/documentData';

export default function TypingTest() {
  const [documentSnippet, setDocumentSnippet] = useState<DocumentSnippet | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const snippet = getRandomSnippet();
      setDocumentSnippet(snippet);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Typing Test</h1>
          
          {isLoading ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md text-center">
              <p className="text-xl">Loading document...</p>
            </div>
          ) : documentSnippet ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">{documentSnippet.title}</h2>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">
                    {documentSnippet.language}
                  </span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">
                    {documentSnippet.category}
                  </span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">
                    {documentSnippet.difficulty}
                  </span>
                </div>
              </div>
              
              <TypingArea 
                documentText={documentSnippet.content} 
                language={documentSnippet.language} 
              />
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md text-center">
              <p className="text-xl text-red-500">Error loading document</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 