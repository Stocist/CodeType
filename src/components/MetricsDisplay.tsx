import React from 'react';

interface MetricsDisplayProps {
  wpm: number;
  accuracy: number;
  errors: number;
  timeElapsed: number;
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ wpm, accuracy, errors, timeElapsed }) => {
  return (
    <div className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">WPM</p>
        <p className="text-2xl font-bold">{wpm}</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">Accuracy</p>
        <p className="text-2xl font-bold">{accuracy}%</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">Errors</p>
        <p className="text-2xl font-bold">{errors}</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">Time</p>
        <p className="text-2xl font-bold">{Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, '0')}</p>
      </div>
    </div>
  );
};

export default MetricsDisplay; 