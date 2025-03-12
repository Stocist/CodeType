import React, { useState, useEffect, useRef } from 'react';
import DocumentDisplay from './DocumentDisplay';
import MetricsDisplay from './MetricsDisplay';

interface TypingAreaProps {
  documentText: string;
  language: string;
}

const TypingArea: React.FC<TypingAreaProps> = ({ documentText, language }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [errors, setErrors] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input field when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (startTime && !isCompleted) {
      interval = setInterval(() => {
        const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        setCurrentTime(elapsedSeconds);
        
        // Calculate WPM: (characters typed / 5) / (time in minutes)
        if (elapsedSeconds > 0) {
          const minutes = elapsedSeconds / 60;
          const words = currentPosition / 5; // Assuming 5 chars = 1 word
          setWpm(Math.round(words / minutes));
        }
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startTime, currentPosition, isCompleted]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Start the timer on the first keystroke
    if (startTime === null) {
      setStartTime(Date.now());
    }
    
    // Ignore modifier keys
    if (['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Tab'].includes(e.key)) {
      return;
    }
    
    // Check if the typed character matches the expected one
    const expectedChar = documentText[currentPosition];
    
    if (e.key === expectedChar) {
      setCurrentPosition(currentPosition + 1);
      
      // Check if the test is completed
      if (currentPosition + 1 >= documentText.length) {
        setIsCompleted(true);
      }
    } else {
      // Increment error count on mistake
      setErrors(errors + 1);
    }
    
    // Calculate accuracy
    const totalAttempts = currentPosition + errors;
    if (totalAttempts > 0) {
      setAccuracy(Math.round((currentPosition / totalAttempts) * 100));
    }
    
    // Prevent default to avoid inserting text into input
    e.preventDefault();
  };

  // Handle input focus
  const handleFocus = () => {
    // You could implement UI changes when focused
  };
  
  const handleBlur = () => {
    // You could implement UI changes when blurred
  };

  return (
    <div className="space-y-6">
      <MetricsDisplay 
        wpm={wpm} 
        accuracy={accuracy} 
        errors={errors} 
        timeElapsed={currentTime} 
      />
      
      <DocumentDisplay 
        code={documentText} 
        language={language} 
        currentPosition={currentPosition} 
      />
      
      <div className="mt-4">
        <input
          ref={inputRef}
          type="text"
          className="opacity-0 absolute"
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus
        />
        <button 
          onClick={() => inputRef.current?.focus()}
          className="w-full py-3 px-4 bg-gray-200 dark:bg-gray-700 rounded-lg text-center"
        >
          Click here or press any key to {startTime ? 'continue typing' : 'start'}
        </button>
      </div>
      
      {isCompleted && (
        <div className="mt-6 p-4 bg-green-100 dark:bg-green-900 rounded-lg text-center">
          <h3 className="text-xl font-bold">Test Completed!</h3>
          <p>Final WPM: {wpm}</p>
          <p>Accuracy: {accuracy}%</p>
          <p>Errors: {errors}</p>
          <button 
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => window.location.reload()}
          >
            Restart Test
          </button>
        </div>
      )}
    </div>
  );
};

export default TypingArea; 