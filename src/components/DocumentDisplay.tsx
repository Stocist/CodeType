import React from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';

interface DocumentDisplayProps {
  code: string;
  language: string;
  currentPosition: number;
}

const DocumentDisplay: React.FC<DocumentDisplayProps> = ({ code, language, currentPosition }) => {
  // Highlight the code using Prism.js
  const highlightedCode = Prism.highlight(code, Prism.languages[language], language);
  
  // Split the code at the current position
  const beforeCursor = code.substring(0, currentPosition);
  const atCursor = code.charAt(currentPosition) || ' ';
  const afterCursor = code.substring(currentPosition + 1);

  return (
    <div className="font-mono text-lg bg-gray-100 dark:bg-gray-800 p-6 rounded-lg overflow-auto max-h-96">
      <pre className="relative">
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
        <div className="absolute top-0 left-0 opacity-30 pointer-events-none">
          <span style={{ color: 'transparent' }}>{beforeCursor}</span>
          <span className="bg-blue-500 text-white">{atCursor}</span>
          <span style={{ color: 'transparent' }}>{afterCursor}</span>
        </div>
      </pre>
    </div>
  );
};

export default DocumentDisplay; 